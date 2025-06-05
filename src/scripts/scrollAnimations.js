document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    let hasPlayedAudio = false;

    const animateElement = (element) => {
        element.classList.add('fade-in-up');

        // Check if it's the song section and play audio
        if (element.classList.contains('song') && !hasPlayedAudio) {
            const audio = element.querySelector('#songAudio');
            if (audio) {
                // Reset audio to start
                audio.currentTime = 0;
                
                // Start playing with fade in
                audio.volume = 0;
                const fadePromise = audio.play();
                
                if (fadePromise !== undefined) {
                    fadePromise.catch(error => {
                        console.log("Audio play failed:", error);
                    });
                }

                // Fade in audio
                let volume = 0;
                const fadeIn = setInterval(() => {
                    if (volume < 0.5) { // Max volume 0.5 (50%)
                        volume += 0.1;
                        audio.volume = volume;
                    } else {
                        clearInterval(fadeIn);
                    }
                }, 100);

                // Add scroll listener to fade out audio when scrolling away
                const handleScroll = () => {
                    const rect = element.getBoundingClientRect();
                    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                    
                    if (!isVisible && !audio.paused) {
                        // Fade out and pause
                        let volume = audio.volume;
                        const fadeOut = setInterval(() => {
                            if (volume > 0.1) {
                                volume -= 0.1;
                                audio.volume = volume;
                            } else {
                                audio.pause();
                                clearInterval(fadeOut);
                            }
                        }, 100);
                    }
                };

                hasPlayedAudio = true;
            }
        }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateElement(entry.target);
                if (!entry.target.classList.contains('song')) {
                    observer.unobserve(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe elementos
    const elementsToAnimate = document.querySelectorAll('.countdown, .gerador, .song');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    let isPlaying = false;

    const animateElement = (element) => {
        element.classList.add('fade-in-up');
    };

    // Função para controlar o áudio
    const handleAudio = () => {
        const audio = document.querySelector('#songAudio');
        const songImage = document.querySelector('.song img');

        if (audio) {
            songImage.addEventListener('click', () => {
                if (!isPlaying) {
                    // Inicia o áudio com fade in
                    audio.currentTime = 0;
                    audio.volume = 0;
                    audio.play();

                    // Fade in
                    let volume = 0;
                    const fadeIn = setInterval(() => {
                        if (volume < 0.5) {
                            volume += 0.1;
                            audio.volume = volume;
                        } else {
                            clearInterval(fadeIn);
                        }
                    }, 100);

                    songImage.style.transform = 'scale(0.95)';
                    isPlaying = true;
                } else {
                    // Fade out e pausa
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

                    songImage.style.transform = 'translateY(0)';
                    isPlaying = false;
                }
            });
        }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateElement(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elementos
    const elementsToAnimate = document.querySelectorAll('.countdown, .gerador, .song');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // Inicializa o controle de áudio
    handleAudio();
});
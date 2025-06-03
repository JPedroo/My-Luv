
function updateMonthCount() {
    const startDate = new Date('2025-04-21');
    const now = new Date();
    
    let months = (now.getFullYear() - startDate.getFullYear()) * 12;
    months += now.getMonth() - startDate.getMonth();
    
    if (now.getDate() < startDate.getDate()) {
        months--;
    }
    
    document.getElementById('monthCount').textContent = Math.max(0, months);
}

function updateCountdown() {
    const startDate = new Date('2024-10-05T00:00:00');
    const now = new Date();
    const diff = now - startDate;

    // Convert difference to days, hours, minutes, seconds
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Update DOM
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    updateMonthCount();
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call
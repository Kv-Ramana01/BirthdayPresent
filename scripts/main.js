// This file contains the JavaScript code for the birthday surprise website.
// It includes functions for the countdown timer and surprise animations.

document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown');
    const birthdayDate = new Date('2023-12-01T00:00:00'); // Charlotte's birthday

    function updateCountdown() {
        const now = new Date();
        const timeDifference = birthdayDate - now;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (timeDifference < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "Happy Birthday, Charlotte!";
            triggerSurprise();
        }
    }

    function triggerSurprise() {
        const surpriseElement = document.getElementById('surprise');
        surpriseElement.style.display = 'block';
        surpriseElement.classList.add('animate');
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
});
document.addEventListener("DOMContentLoaded", function () {
    const smallMoons = document.querySelectorAll('.moon-small');
    const hours = document.getElementById('Hours');
    const percentage = document.getElementById('percentage');
    const remained = document.getElementById('remained');

    function updateBigMoon() {
        const fullMoons = document.querySelectorAll('.moon-small.full').length;
        const totalMoons = smallMoons.length;

        if (fullMoons === 0) {
            percentage.style.visibility = 'hidden';
            percentage.style.height = 0;
        } else {
            percentage.style.visibility = 'visible';
            percentage.style.height = `${(fullMoons / totalMoons) * 330}px`;
            percentage.innerText = `${(fullMoons / totalMoons) * 100}%`;
        }

        if (fullMoons === totalMoons) {
            remained.style.visibility = 'hidden';
            remained.style.height = 0;
        } else {
            remained.style.visibility = 'visible';
            hours.innerText = `${8 - fullMoons} More Hour(s)`;
        }
    }

    function highlightMoons(idx) {
        if (idx === 7 && smallMoons[idx].classList.contains("full")) {
            idx--;
        } else if (smallMoons[idx].classList.contains('full') && !smallMoons[idx].nextElementSibling.classList.contains('full')) {
            idx--;
        }

        smallMoons.forEach((moon, idx2) => {
            if (idx2 <= idx) {
                moon.classList.add('full');
            } else {
                moon.classList.remove('full');
            }
        });

        updateBigMoon();
    }

    smallMoons.forEach((moon, idx) => {
        moon.addEventListener('click', () => highlightMoons(idx));
    });

    updateBigMoon();
});
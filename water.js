document.addEventListener("DOMContentLoaded", function () {
    const smallglasses = document.querySelectorAll('.glass-small');
    const liters = document.getElementById('liters');
    const percentage = document.getElementById('percentage');
    const remained = document.getElementById('remained');

    function updateBigGlass() {
        const fullGlasses = document.querySelectorAll('.glass-small.full').length;
        const totalGlasses = smallglasses.length;

        if (fullGlasses === 0) {
            percentage.style.visibility = 'hidden';
            percentage.style.height = 0;
        } else { 
            percentage.style.visibility = 'visible';
            percentage.style.height = `${(fullGlasses / totalGlasses) * 330}px`;
            percentage.innerText = `${(fullGlasses/ totalGlasses) * 100}%`;
        }

        if (fullGlasses === totalGlasses) {
            remained.style.visibility = 'hidden';
            remained.style.height = 0;
        } else {
            remained.style.visibility = 'visible';
            liters.innerText = `${8 - (1 * fullGlasses )} More Glass`;
        }
    }

    function highlightGlasses(idx) {
        if (idx === 7 && smallglasses[idx].classList.contains("full")) {
            idx--;
        } else if (smallglasses[idx].classList.contains('full') && !smallglasses[idx].nextElementSibling.classList.contains('full')) {
            idx--;
        }

        smallglasses.forEach((glass, idx2) => {
            if (idx2 <= idx) {
                glass.classList.add('full');
            } else {
                glass.classList.remove('full');
            }
        });

        updateBigGlass();
    }

    smallglasses.forEach((glass, idx) => {
        glass.addEventListener('click', () => highlightGlasses(idx));
    });

    updateBigGlass();
});
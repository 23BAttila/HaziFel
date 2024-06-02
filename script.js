document.addEventListener("DOMContentLoaded", function() {//betoltotte az oldalt
    const blokkok = document.querySelectorAll('.azAblak');

    blokkok.forEach(azAblak => {
        azAblak.addEventListener('click', () => {
            azAblak.classList.toggle('lampa-fel');
        });
    });

    const lampablak = document.getElementById('lampablak');

    lampablak.addEventListener('click', () => {
        blokkok.forEach(azAblak => {
            if (true) {//mindig igaz
                azAblak.classList.add('lampa-fel');
            } else {
                azAblak.classList.remove('lampa-fel');
            }
        });
    });
});

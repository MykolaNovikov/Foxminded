'use strict';

    const initRandomColor = () => {
        const btn = document.querySelector('.btn');

        const getRandomColor = () => {
            const hex = '0123456789ABCDEF';
            let randomColor = '';

            for (let i = 0; i < 6; i++) {
                randomColor += hex[Math.floor(Math.random() * hex.length)];
            }

            return randomColor
        }

        const colorizeScreen = () => {
            const randomColor  = getRandomColor();
            const color = document.querySelector('.color');

            document.body.style.backgroundColor = '#' + randomColor;
            color.textContent = randomColor;
            color.style.color = '#' + randomColor;
        }

        if (btn) {
            btn.addEventListener('click', colorizeScreen);
            btn.click();
        } else {
            console.error('Element with class ".btn" is not known.');
        }
    };

    document.addEventListener('DOMContentLoaded', initRandomColor)

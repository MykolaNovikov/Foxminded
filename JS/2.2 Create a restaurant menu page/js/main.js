'use strict';

const initFoxesList = (items) => {
    const initFoxesMenu = () => {
        const tabs = document.querySelector('.tabs ol');
        tabs.addEventListener('click',(event => {
            if (event.target.tagName === 'LI') {
                const id = event.target.dataset.id
                filterItems(id);
            }
        }))
    };

    const filterItems = (id = 'all') => {
        const filterCategories = (id === 'all') ? items : items.filter(item => item['data-id'] === id);

        displayItem(filterCategories);
        document.querySelectorAll('.tabs ol li').forEach(li => li.classList.remove('active-li'));
        document.querySelector(`[data-id ="${id}"]`).classList.add('active-li');
    }

    const displayItem = (items) => {
        const content = items.map(({ image, title, likes, text }) => {
            return (
                `<div class = 'box'>
                    <img src="${image}" />
                    <div class = 'content-box' >
                        <div class = 'title_and_like'>
                            <h3>${title}</h3>
                            <span  class = 'likes'>${likes}</span>
                        </div>    
                        <hr>
                        <p>${text}</p>
                        <button>Read more</button>
                    </div>  
                </div>`
            )
        }).join('')

        document.getElementById('main-content').innerHTML = content
    }

    initFoxesMenu();
    filterItems();
};

fetch('./js/card.json')
    .then(response => response.json())
    .then(data => initFoxesList(data))
    .catch(error => {
        console.error("Error: " + error);
    });

document.addEventListener('DOMContentLoaded', initFoxesList)


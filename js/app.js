'use strict';

const mainParentSelector = document.getElementById('root');

const parent = createElement('div', mainParentSelector, '', {
    id: 'container',
});

const parentCharacters = createElement('div', parent, '', {
    className: 'block',
});
const parentPlanets = createElement('div', parent, '', {
    className: 'block',
});
const parentVehicles = createElement('div', parent, '', {
    className: 'block',
});

const people = createElement(
    'button',
    parentCharacters,
    'CHARACTERS',
    {
        className: 'btn btn-light',
        id: 'charactersBtn',
    },
    {
        click: () => getList('people'),
    }
);
const charactersList = createElement('div', parentCharacters, '', {
    className: 'list-group',
    id: 'charactersList',
});

const planets = createElement(
    'button',
    parentPlanets,
    'PLANETS',
    {
        className: 'btn btn-light',
        id: 'planetsBtn',
    },
    {
        click: () => getList('planets'),
    }
);

const planetsList = createElement('div', parentPlanets, '', {
    className: 'list-group',
    id: 'planetsList',
});

const vehicles = createElement(
    'button',
    parentVehicles,
    'VEHICLES',
    {
        className: 'btn btn-light',
        id: 'vehiclesBtn',
    },
    {
        click: () => getList('vehicles'),
    }
);

const vehiclesList = createElement('div', parentVehicles, '', {
    className: 'list-group',
    id: 'vehiclesList',
});

const API_BASE = `https://swapi.dev/api`;

function getList(key) {
    const containers = {
        people: charactersList,
        planets: planetsList,
        vehicles: vehiclesList,
    };
    axios.get(`${API_BASE}/${key}/`).then((result) => {
        const category = result.data.results;
        containers[key].innerHTML = '';
        detailsContainer.innerHTML = '';
        charactersList.innerHTML = '';
        planetsList.innerHTML = '';
        vehiclesList.innerHTML = '';
        category.forEach((element) => {
            const item = document.createElement('div');
            item.textContent = element.name;
            item.className =
                'list-group-item list-group-item-action list-group-item-light';
            item.setAttribute('data-url', element.url);
            containers[key].appendChild(item);
            item.addEventListener('click', (event) => {
                const elementUrl = event.target.getAttribute('data-url');
                axios.get(elementUrl).then((result) => {
                    detailsContainer.innerHTML = '';
                    displayDetails(result.data);
                });
            });
        });
    });
}

const detailsContainer = createElement('div', parent, '', {
    className: 'list-group',
    id: 'detailsContainer',
});

function displayDetails(value) {
    for (const key in value) {
        const unnecessaryInfo = ['created', 'edited', 'url'];
        const propertyLink = ['films', 'vehicles', 'starships', 'homeworld', 'residents', 'pilots'];

        const nameOfProperty =
            key[0].toUpperCase() + key.slice(1).split('_').join(' ');

        switch (true) {
            case unnecessaryInfo.includes(key) || value[key].length === 0:
                detailsContainer.innerHTML += '';
                break;

            case propertyLink.includes(key):
                const url = value[key];
                let list = [];

                if (Array.isArray(url)) {
                    url.forEach((link, index) => {
                        axios.get(link).then((result) => {
                            const info = result.data;

                            list.push(info.title || info.name);

                            if (index === url.length - 1) {
                                detailsContainer.innerHTML += `<div class="list-group-item details"><h6>${nameOfProperty}:</h6>${list.map(
                                    (item) => {
                                        return `${item}</br>`;
                                    }
                                )}</div>`;
                            }
                        });
                    });
                } else {
                    axios.get(url).then((result) => {
                        detailsContainer.innerHTML += `<div class="list-group-item details"><h6>${nameOfProperty}:</h6><p>${result.data.name}</p></div>`;
                    });
                }

                break;

            case Array.isArray(value[key]):
                detailsContainer.innerHTML += `<div class="list-group-item details"><h6>${nameOfProperty}:</h6><p>${value[
                    key
                    ].join('<br>')}</p></div>`;
                break;

            default:
                detailsContainer.innerHTML += `<div class="list-group-item details"><h6>${nameOfProperty}:</h6><p>${value[key]}</p></div>`;
        }
    }
}





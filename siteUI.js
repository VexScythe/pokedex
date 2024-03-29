const container = document.querySelector('[data-info-container]')


export function render(data) {
    clearElement(container);
    imageAndAudio(data);
    idNameRow(data);
    typesRow(data);
    description(data);
}

function imageAndAudio(data) {
    const image = document.createElement('img');
    image.classList.add('pokemon__img');
    image.src = `${data.sprite}`
    image.alt = `${data.name}`
    container.appendChild(image);
    image.addEventListener('click', () => {
        const sound = document.createElement('audio');
        sound.volume = 0.2;
        sound.src = data.sound;
        sound.play();
    });
}

function idNameRow(data) {
    const row = document.createElement('p')
    row.classList.add('card__row')
    container.appendChild(row)
    row.textContent = `#${data.id} - ${data.name.charAt(0).toUpperCase() + data.name.slice(1)}`
}

function typesRow(data) {
    const row = document.createElement('p')
    row.classList.add('card__row')
    container.appendChild(row)
    row.textContent = `${data.types.map(type => type.charAt(0).toUpperCase() + type.slice(1)).join(' - ')}`
}

function description(data) {
    const descrCont = document.createElement('p')
    descrCont.classList.add('card__description')
    container.appendChild(descrCont)
    descrCont.textContent = `${data.description}`
}

function clearElement(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
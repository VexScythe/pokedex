const container = document.querySelector('[data-info-container]')


export function render() {
    imageAndAudio();
    idNameRow();
    typesRow();
}

function imageAndAudio() {
    const image = document.createElement('img');
    image.classList.add('pokemon__img');
    image.src = `${data.sprites.front_default}`
    image.alt = `${data.name}`
    container.appendChild(image);
    image.addEventListener('click', () => {
        const sound = document.createElement('audio');
        /* image.appendChild(sound); */
        sound.src = data.cries.latest;
        sound.play();
    });
}

function idNameRow() {
    const row = document.createElement('p')
    row.classList.add('card__row')
    container.appendChild(row)
    row.textContent = `#${data.id} - ${data.name}`
}

function typesRow () {
    const row = document.createElement('p')
    row.classList.add('card__row')
    container.appendChild(row)
    row.textContent = `${data.types.join(' - ')}`
}
const cardWrapper = document.querySelector('.content-cards');
//поле поиска
const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')


const films = [
    {
        id: 0,
        title: 'Марсианин 0',
        original: 'The Martian 2015',
        category: 'Фантастика, приключения',
        rating: 7.8,
        link: '/film.html',
        img: './image/film.png'
    },
    {
        id: 1,
        title: 'Марсианин 1',
        original: 'The Martian 2015',
        category: 'Фантастика, приключения',
        rating: 7.8,
        link: '/film.html',
        img: './image/film.png'
    },{
        id: 2,
        title: 'Марсианин 2',
        original: 'The Martian 2015',
        category: 'Фантастика, приключения',
        rating: 7.8,
        link: '/film.html',
        img: './image/film.png'
    },{
        id: 3,
        title: 'Марсианин 3',
        original: 'The Martian 2015',
        category: 'Фантастика, приключения',
        rating: 7.8,
        link: '/film.html',
        img: './image/film.png'
    },{
        id: 4,
        title: 'Марсианин 4',
        original: 'The Martian 2015',
        category: 'Фантастика, приключения',
        rating: 7.8,
        link: '/film.html',
        img: './image/film.png'
    },{
        id: 5,
        title: 'Марсианин 5',
        original: 'The Martian 2015',
        category: 'Фантастика, приключения',
        rating: 7.8,
        link: '/film.html',
        img: './image/film.png'
    }
]

const render = (array) => {
    console.log(array)
    cardWrapper.innerHTML = ''//затераем все данные что были до

    //перебираем массив films
    //в метод forEach мы передаем функцию, записываем ее уже по модному как стрелочную ф-цию
    array.forEach((item) => {
        cardWrapper.insertAdjacentHTML('beforeend', 
            `<a href="${item.link}" class="content-cards__item">
                <div class="content-cards__item--img">
                    <img src="${item.img}" alt="film">
                </div>
                <div class="content-cards__item--title">
                    <h5>${item.title},</h5>
                    <span>${item.original}</span>
                </div>
                <p class="content-cards__item--description">
                    ${item.category}
                </p>
                <p class="content-cards__item--rating">
                   ${item.rating}
                </p>
            </a>`)
    });
}

//Обработчик события на поиск
searchButton.addEventListener('click', () => {
    render(films.filter((item) => item.title.includes(searchInput.value)))
})

render(films)




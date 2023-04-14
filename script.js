let button = document.querySelector('.button');
let container = document.querySelector('.container');

let intervalId;

let stylesFly = ['like-fly1', 'like-fly2', 'like-fly3', 'like-fly4']

// создать массив с названиями классов
// в makeLike получать рандомное число от 0 до длины массива - 1 и получать название класса по этому индексу из массива
// добавлять этот класс в созданный like

function makeLike() {
    let like = document.createElement('div');
    let style = stylesFly[Math.floor(Math.random() * stylesFly.length)];
    like.className = `like ${style}`;
    container.prepend(like);
    like.addEventListener('animationend', function() {
        like.remove();
    })
}

button.addEventListener('mousedown', function() {
    makeLike();
    intervalId = setInterval(makeLike, 300)
})

button.addEventListener('mouseup', function() {
    clearInterval(intervalId);
})


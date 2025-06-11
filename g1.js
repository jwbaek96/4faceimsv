const g1db = [
            {num:"1", img : "./assets/g1/1.jpg"},
            {num:"2", img : "./assets/g1/2.jpg"},
            {num:"3", img : "./assets/g1/3.jpg"},
            {num:"4", img : "./assets/g1/4.jpg"}
        ]
const g1imgs = document.querySelector('#g1-imgs');
const g1dots = document.querySelector('#g1dots');

// 이미지 초기 세팅 프린트 -----------------------------------------------
function g1imgsSET() {
    const slideImgHTML = g1db.map(item => `<img src="${item.img}">`).join('');
    g1imgs.innerHTML = slideImgHTML;

    const dotsHTML = g1db.map(item => `
        <div class="dot" data-num="${item.num}"></div>
    `).join('');
    g1dots.innerHTML = dotsHTML;
}
g1imgsSET();
// 슬라이더 컨트롤 -----------------------------------------------
let g1page = 1;
const g1dbtotal = g1db.length;

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[g1page - 1].classList.add('active');

    console.log(g1page)
}

function moveSlide(direction) {
    if (direction === 'next') {
        g1page = g1page < g1dbtotal ? g1page + 1 : 1;
        g1imgs.style.transform = `translateX(calc(-100% * ${g1page - 1}))`;
    } else if (direction === 'prev') {
        g1page = g1page > 1 ? g1page - 1 : g1dbtotal;
        g1imgs.style.transform = `translateX(calc(-100% * ${g1page - 1}))`;
    }

    updateDots();
}

function jumpToSlide(num) {
    g1page = parseInt(num);
    g1imgs.style.transform = `translateX(calc(-100% * ${g1page - 1}))`;
    updateDots();
}

const prev = document.querySelector('.btn-move-prev');
const next = document.querySelector('.btn-move-next');
prev.addEventListener('click', () => moveSlide('prev'));
next.addEventListener('click', () => moveSlide('next'));

g1dots.addEventListener('click', (e) => {
    if (e.target.classList.contains('dot')) {
        jumpToSlide(e.target.getAttribute('data-num'));
    }
});
updateDots();

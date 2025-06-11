const g2db = [
            {num:"1", img : "./assets/g2/1.jpg"},
            {num:"2", img : "./assets/g2/2.jpg"},
            {num:"3", img : "./assets/g2/3.jpg"},
            {num:"4", img : "./assets/g2/4.jpg"}
        ]
const g2imgs = document.querySelector('#g2-imgs');
const g2dots = document.querySelector('#g2dots');

// 이미지 초기 세팅 프린트 -----------------------------------------------
function g2imgsSET() {
    const slideImgHTML = g2db.map(item => `<img src="${item.img}">`).join('');
    g2imgs.innerHTML = slideImgHTML;

    const dotsHTML = g2db.map(item => `
        <div class="dot dot2" data-num="${item.num}"></div>
    `).join('');
    g2dots.innerHTML = dotsHTML;
}
g2imgsSET();
// 슬라이더 컨트롤 -----------------------------------------------
let g2page = 1;
const g2dbtotal = g2db.length;

function updateDots2() {
    const dots = document.querySelectorAll('.dot2');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[g2page - 1].classList.add('active');

    console.log(g2page)
}

function moveSlide2(direction) {
    if (direction === 'next') {
        g2page = g2page < g2dbtotal ? g2page + 1 : 1;
        g2imgs.style.transform = `translateX(calc(-100% * ${g2page - 1}))`;
    } else if (direction === 'prev') {
        g2page = g2page > 1 ? g2page - 1 : g2dbtotal;
        g2imgs.style.transform = `translateX(calc(-100% * ${g2page - 1}))`;
    }

    updateDots2();
}

function jumpToSlide2(num) {
    g2page = parseInt(num);
    g2imgs.style.transform = `translateX(calc(-100% * ${g2page - 1}))`;
    updateDots();
}

const prev2 = document.querySelector('.btn-move-prev2');
const next2 = document.querySelector('.btn-move-next2');
prev2.addEventListener('click', () => moveSlide2('prev'));
next2.addEventListener('click', () => moveSlide2('next'));

g2dots.addEventListener('click', (e) => {
    if (e.target.classList.contains('dot2')) {
        jumpToSlide2(e.target.getAttribute('data-num'));
    }
});
updateDots();

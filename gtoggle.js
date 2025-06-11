const popCheckbox1 = document.querySelector('#popCheckbox1');
const g1 = document.querySelector('#g1');

// 체크박스 상태에 따라 .dpnone 클래스 토글
popCheckbox1.addEventListener('change', () => {
    if (popCheckbox1.checked) {
        g1.style.zIndex = '1';
        g1.style.visibility = 'visible';
        g1.style.opacity = '1';
    } else {
        g1.style.opacity = '0'; 
        g1.addEventListener('transitionend', () => {
            if (!popCheckbox1.checked) {
                g1.style.zIndex = '-1'; 
                g1.style.visibility = 'hidden';
            }
        }, { once: true });
    }
});
// ----------------
const popCheckbox2 = document.querySelector('#popCheckbox2');
const g2 = document.querySelector('#g2');

// 체크박스 상태에 따라 .dpnone 클래스 토글
popCheckbox2.addEventListener('change', () => {
    if (popCheckbox2.checked) {
        g2.style.zIndex = '1';
        g2.style.visibility = 'visible';
        g2.style.opacity = '1';
    } else {
        g2.style.opacity = '0'; 
        g2.addEventListener('transitionend', () => {
            if (!popCheckbox2.checked) {
                g2.style.zIndex = '-1'; 
                g2.style.visibility = 'hidden';
            }
        }, { once: true });
    }
});
// ----------------
const popCheckbox3 = document.querySelector('#popCheckbox3');
const me = document.querySelector('#me');

// 체크박스 상태에 따라 .dpnone 클래스 토글
popCheckbox3.addEventListener('change', () => {
    if (popCheckbox3.checked) {
        me.style.zIndex = '2';
        me.style.visibility = 'visible';
        me.style.opacity = '2';
    } else {
        me.style.opacity = '0'; 
        me.addEventListener('transitionend', () => {
            if (!popCheckbox3.checked) {
                me.style.zIndex = '-1'; 
                me.style.visibility = 'hidden';
            }
        }, { once: true });
    }
});
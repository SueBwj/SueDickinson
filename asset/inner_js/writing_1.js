const toastTrigger = document.getElementById('liveToastBtn');
let cnt = 1;
let str = 'liveToast_';

if (toastTrigger) {
    let toastLiveExample = document.getElementById(str + cnt.toString());
    let toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    toastTrigger.addEventListener('click', () => {

        toastBootstrap.show();
        cnt++;
        if (cnt >= 4) {
            cnt = 1;
        }
        toastLiveExample = document.getElementById(str + cnt.toString());
        toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    });
}


//设置顶部的蓝色进度条
const scrollSpan = document.querySelector('.post-reading-progress-indicator span');
window.addEventListener('scroll', function () {
    //获取页面总高度
    let totalHeight = this.document.documentElement.scrollHeight;
    let windowHeight = window.innerHeight;
    let scrollbarHeight = (windowHeight / totalHeight) * totalHeight;


    //获取当前滚动位置
    let scrollPosition = this.window.scrollY;

    //计算滚动百分比
    let scrollPercentage = (scrollPosition / (totalHeight - scrollbarHeight)) * 100;
    scrollSpan.style.width = scrollPercentage.toString() + '%';
});

//返回顶部的button
let backtoTopBtn = document.querySelector('.backToTop button');
// 显示按钮，当滚动超过页面高度的一半时
window.addEventListener("scroll", function () {
    if (window.scrollY > window.innerHeight / 2) {
        backtoTopBtn.style.display = "block";
    } else {
        backtoTopBtn.style.display = "none";
    }
});

// 点击按钮时，滚动回到顶部
backtoTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // 平滑滚动效果
    });
});


//注释的js
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));



//用来抓取nav-link
const navbarLink = document.querySelectorAll('.nav-link');
navbarLink.forEach(item => {
    item.addEventListener('click', function () {
        item.classList.add('active');
        navbarLink.forEach(link => {
            if (link != item) {
                link.classList.remove('active');
            }
        });
    });
});
//header 

const HeaderLinks = document.querySelectorAll('#header-items');

HeaderLinks.forEach(item => {
    item.addEventListener('click', function () {
        item.classList.add('active');
        HeaderLinks.forEach(link => {
            if (link !== item) {
                link.classList.remove('active');
            }
        });
    });

});


//music

const Music = document.querySelector('#logo-container');
Music.addEventListener('click', function () {
    Music.classList.toggle('active');
});

//music player
let musicPlayer = document.querySelector('#music-container');
let getMusicPlayer = document.querySelector('#logo-container');
let musicPlayerOpen = false;

getMusicPlayer.addEventListener('click', function () {
    if (!musicPlayerOpen) {
        musicPlayerOpen = true;
        musicPlayer.style.display = "block";
    } else {
        musicPlayerOpen = false;
        musicPlayer.style.display = "none";
    }
});


//adjust navbar

const primaryHeader = document.querySelector('.navbar-container');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
primaryHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
    primaryHeader.classList.toggle('sticking', !entries[0].isIntersecting);
}, { rootMargin: "500px 0px 0px 0px" });

navObserver.observe(scrollWatcher);


//article animation
const articles = document.querySelectorAll('#writes-items');
articles.forEach(article => {
    article.addEventListener('mouseenter', function (e) {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        const ripples = document.createElement('span');

        ripples.style.left = `${x}px`;
        ripples.style.top = `${y}px`;

        this.appendChild(ripples);
        setTimeout(() => {
            ripples.remove();
        }, 1000);
    });
});


//works
const worksImg = document.querySelector('.works-img');
const arrowIcons = document.querySelectorAll('.works-content i');

let isDragStart = false, prevPageX, prevScrolleft;
let firstImgWidth = 300;

arrowIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        worksImg.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    });
});


const draggStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    worksImg.classList.add("dragging");
    prevScrolleft = worksImg.scrollLeft;
};

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    worksImg.scrollLeft = prevScrolleft - positionDiff;
};

const dragStop = () => {
    isDragStart = false;
    worksImg.classList.remove("dragging");

};

worksImg.addEventListener("mousedown", draggStart);
worksImg.addEventListener("mousemove", dragging);
worksImg.addEventListener("mouseup", dragStop);


//footer change image
const imgList = ['./asset/img/footer.png', './asset/img/footer1.png'];
const colorList = ['#fff', '#2c3d6d'];
let curIndex = 0;

function changeBackgroundImg() {
    curIndex = (curIndex + 1) % imgList.length;
    let imageUrl = imgList[curIndex];
    document.querySelector('.footer_container').style.backgroundImage = "url('" + imageUrl + "')";
    document.querySelector('.footer_container .footer-text').style.color = colorList[curIndex];
    const Icons = document.querySelectorAll('.footer_container .bi');
    Icons.forEach((icon) => {
        icon.style.color = colorList[curIndex];
    });
}
setInterval(changeBackgroundImg, 5000);


//scroll page
let Navbar = document.querySelector('.navbar-container');
let navLinks = document.querySelectorAll('.navbar-container .items a');
let Travel = document.querySelector('.article-container');
let Articles = document.querySelector('.daily-writes-container');
let Works = document.querySelector('.works-container');
let Footer = document.querySelector('.footer_container');
let sections = [Navbar, Travel, Articles, Works, Footer];

let sectionOffsets = Array.from(sections).map(function (section) {
    return section.offsetTop;
});

window.addEventListener('scroll', function () {
    let scrollPos = window.scrollY;

    sectionOffsets.forEach(function (offset, index) {
        if (scrollPos >= offset && scrollPos < sectionOffsets[index + 1]) {
            navLinks.forEach(function (link) {
                link.classList.remove('active');
            });

            navLinks[index].classList.add('active');
        }
    });
});

navLinks.forEach(function (link, index) {
    link.addEventListener('click', function (event) {
        if (index !== 0) {
            event.preventDefault();
            let targetSection = sections[index];
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


//navbar open and close
const navbarButton = document.querySelector('.navbar-toggle');
const iconsAttr = document.querySelector('.bi-water');
const navbarItems = document.querySelector('.items');
navbarButton.addEventListener('click', () => {
    if (iconsAttr.classList.contains('open')) {
        navbarItems.classList.add('show');
        iconsAttr.classList.remove('open');
        iconsAttr.classList.add('close');
        navbarButton.style.transform = 'rotate(90deg)';
    } else {
        navbarItems.classList.remove('show');
        iconsAttr.classList.remove('close');
        iconsAttr.classList.add('open');
        navbarButton.style.transform = 'rotate(0deg)';
    }

});

// document.addEventListener( type: 'DOMContentLoaded', listener: function() {
//     const navInit = () => {
//         const  navbarCollapsible = document.body.querySelector(selectors: '#mainNav');
//         if (navbarCollapsible) console.log('cool');
//         if(window.scrollY === 0) {
//             navbarCollapsible.classList.remove(tokens: 'navbar-shrink');
//         } else {
//             navbarCollapsible.classList.add('navbar-shrink');
//         }
//     }

//     navInit()
//     window.addEventListener(type: 'scroll', listener: () => {
//         navInit();// запускаем функцию при скроле страницы
//     })
//     window.addEventListener(type: 'resize', listener: () => {
//         navInit(); // запускаем функцию при ресайзе страницы
//     })
// });



document.addEventListener('DOMContentLoaded', function() {
    const navInit = () => {
        //изменение цвета фона меню
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (navbarCollapsible) {
            // console.log('cool');
            if (window.scrollY === 0) {
                navbarCollapsible.classList.remove('navbar-shrink');
            } else {
                navbarCollapsible.classList.add('navbar-shrink');
            }

            const links =  document.querySelectorAll('.nav-link');//ищем все навигационные ссылки
            const sections = document.querySelectorAll('section');//ищем все секции

            sections.forEach(section => {//для каждой секции
                //проверяем, если страница прокручена больше, чем расстояние секции от начала страницы
                if (window.scrollY >= (section.offsetTop - 100)){
                    //отладка. удалить
                    console.log(window.scrollY + ">=" + section.offsetTop + " " + section.id);
                    //для каждой ссылки
                    links.forEach(link => {
                        //удаляем активный класс
                        link.classList.remove('active');
                        //проверяем, если href ссылки без значка # === id секции 
                        if (link.href.split('#').pop() === section.id) {
                            //console.log("I'm  here");
                            link.classList.add('active');//добавляем ссылке активный класс
                        }
                    })
                }
            })
        }
    };

    // function offset(el) {
    //     const rect = el.getBoundingClientReact(),
    //         scrollLeft = window.scrollX || document.documentElement.scrollLeft,
    //         scrollTop = window.scrollY || document.documentElement.scrollTop;
    //     return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
    // }
    function offset(el) {
        const rect = el.getBoundingClientRect();
        const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    //анимация контента
    
    const animItems = document.querySelectorAll('.animate');
    if (animItems.length > 0) {
        function onEntry(params) {
            animItems.forEach(item => {
                const itemHeight = item.offsetHeight;//высота анимируемого объекта
                const itemOffset = offset(item).top;//позиция объекта от верхнего края
                const startPos = 2;//параметр регулирования старта анимации
                //не window.innerWidth/innerHeight
                const animPoint = document.documentElement.clientHeight - itemHeight / startPos;//точка запуска анимации

                if(itemHeight > document.documentElement.clientHeight) {
                    const animPoint = document.documentElement.clientHeight - document.documentElement.clientHeight / startPos;
                }
                if((scrollY > itemOffset - animPoint) && scrollY < itemOffset + itemHeight) {
                    item.classList.add('show');
                } else {
                    if(!item.classList.contains('no-hide')) {
                        item.classList.remove('show');
                    }
                }
            })
        }
    }

    // function onEntry(entry) {
    //     entry.forEach(change => {
    //         if (change.isIntersecting) {
    //             change.target.classList.add('show');
    //         } else change.target.classList.remove('show');
    //     });
    // }

    // let options = {threshold: [0.5]};
    // let observer =  new IntersectionObserver(onEntry, options);
    // let elements =  document.querySelectorAll('.animate');

    // for (let elm of elements) {
    //     observer.observe(elm);
    // }

    onEntry();
    navInit();
    window.addEventListener('scroll', () => {
        navInit();// запускаем функцию при скроле страницы
        onEntry();
    });

    window.addEventListener('resize', () => {
        navInit();// запускаем функцию при ресайзе страницы
    });
});

var audio = new Audio("./assets/Icytwat.mp3");

function playSong() {
if (audio.currentTime > 0 && !audio.paused) {
return;
}

audio.play();
}

window.addEventListener('scroll', playSong);





//снежинки 
let colorType = {
    type: "multi"
  };
  
  let colors = {
    color1: "rgba(255,255,255,1)",
    color2: "rgba(233,239,250,1)",
    color3: "rgba(222,241,250,1)",
    color4: "rgba(178,209,219,1)",
    color5: "rgba(135,143,145,1)"
  };
  
  let snowflakeImages = [
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image()
  ];
  
  snowflakeImages[0].src = "https://assets.codepen.io/13471/snowflake.png";
  snowflakeImages[1].src = "https://assets.codepen.io/13471/snowflake(1).png";
  snowflakeImages[2].src = "https://assets.codepen.io/13471/snowflake(2).png";
  snowflakeImages[3].src = "https://assets.codepen.io/13471/snowflake(3).png";
  snowflakeImages[4].src = "https://assets.codepen.io/13471/snowflake(4).png";
  snowflakeImages[5].src = "https://assets.codepen.io/13471/snowflake(5).png";
  snowflakeImages[6].src = "https://assets.codepen.io/13471/snowflake(6).png";
  snowflakeImages[7].src = "https://assets.codepen.io/13471/snowflake(7).png";
  snowflakeImages[8].src = "https://assets.codepen.io/13471/snowflake(8).png";
  
  let options = {
    alphaSpeed: 2,
    alphaVariance: 1,
    color: [colors.color1, colors.color2, colors.color3, colors.color4],
    composition: "source-over",
    count: 120,
    direction: 160,
    drift: 2,
    glow: 50,
    imageUrl: snowflakeImages,
    maxAlpha: 2,
    maxSize: 24,
    minAlpha: -0.2,
    minSize: 3,
    parallax: 6,
    rotation: 0.5,
    shape: ["image"],
    speed: 2.5,
    style: "fill",
    twinkle: false,
    xVariance: 20,
    yVariance: 20,
  };
  
  let resizeTimeout;
  
  window.onload = function () {
    initStats();
    initSparticles();
    initGui();
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeHandler, 200);
    });
  };
  
  function resizeHandler() {
    window.mySparticles.destroy();
    window.initSparticles();
  }
  
  window.initSparticles = function () {
    var $main = document.querySelector("body");
    window.mySparticles = new Sparticles($main, options);
  };
  
  window.initStats = function () {
    var stats = new Stats();
    stats.domElement.classList.add("stats");
    document.body.appendChild(stats.domElement);
    function statsDisplay() {
      stats.begin();
      stats.end();
      requestAnimationFrame(statsDisplay);
    }
    requestAnimationFrame(statsDisplay);
  };
  
  window.initGui = function () {
    const s = window.mySparticles;
    const shapes = ["circle", "square", "triangle", "diamond", "line", "image"];
    const styles = ["fill", "stroke", "both"];
    const colorOptions = ["single", "multi", "rainbow"];
    const composites = [
      "source-over",
      "source-in",
      "source-out",
      "source-atop",
      "destination-over",
      "destination-in",
      "destination-out",
      "destination-atop",
      "lighter",
      "copy",
      "xor",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity"
    ];
  
    const rerender = () => {
      window.mySparticles.destroy();
      window.initSparticles();
    };
  
    var rerenderColors = function (v) {
      if (colorType.type === "rainbow") {
        options.color = "rainbow";
      } else if (colorType.type === "single") {
        options.color = colors.color1;
      } else {
        options.color = Object.keys(colors).map(i => colors[i]);
      }
    }
}




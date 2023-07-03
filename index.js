import {shops} from "./shops.js"

const burger = document.querySelector(".header-burger");
const mobLinks = document.querySelectorAll(".mobile-nav-link");



burger.addEventListener("click", ()=>{
    document.getElementById("mobile-nav").classList.toggle("display-none");
})

mobLinks.forEach(link => {
    link.addEventListener("click", ()=> {
        console.log("clicked!")
        document.getElementById("mobile-nav").classList.add("display-none");
    })
})


// *************************
// yandex maps
// https://yandex.ru/dev/jsapi30/doc/ru/?from=mapsapi
// *************************
ymaps3.ready.then(init);
function init() {
// Создание карты
const map = new ymaps3.YMap(document.getElementById('map'), {
    location: {
    // Координаты центра карты
    // Порядок по умолчанию: «долгота, широта»
    center: [37.61755947247549, 55.75242679785425 ],
    // Уровень масштабирования
    // Допустимые значения: от 0 (весь мир) до 21.
    zoom: 7
    }
});
// Добавляем слой для отображения схематической карты, при отключении - выключает карту
    map.addChild(new ymaps3.YMapDefaultSchemeLayer());
// слой для добавления маркеров
    map.addChild(new ymaps3.YMapDefaultFeaturesLayer({zIndex: 1800}))
// *************************
// маркер 1
// *************************

    // const markerElement = document.createElement('div');
    // markerElement.className = 'marker-class';
    // // markerElement.innerText = "I'm marker!";

    // const mark2 = new ymaps3.YMapMarker(
    // {
    //     // source: 'markerSource',
    //     coordinates: [37.61755947247549, 55.75242679785425 ],
    //     draggable: false,
    //     mapFollowsOnDrag: true
    // },
    // markerElement
    // );
    // map.addChild(mark2);

    
    // *************************
    // добавляем сразу несколько маркеров из массива
    // *************************
    
    shops.forEach(el=>{
        const markerElement = document.createElement('div');
        markerElement.className = 'marker-class';
        markerElement.addEventListener("click", ()=>{
            window.alert(el.name);
        })

        const mark = new ymaps3.YMapMarker(
        {
            // source: 'markerSource',
            coordinates: el.coordinates,
            draggable: false,
            mapFollowsOnDrag: true
        },
        markerElement
        );
        map.addChild(mark);
    });
    
}
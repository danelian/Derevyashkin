ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [55.87537456883673, 37.525369499999954],
    zoom: 16
  }, {
    searchControlProvider: 'yandex#search'
  }),

    // Создаём макет содержимого.
    // MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    //   '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    // ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: '',
      balloonContent: ''
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemark.svg',
      iconImageSize: [164, 46],
      iconImageOffset: [-5, -23]
    });

  myMap.geoObjects
    .add(myPlacemark);
});
const goods = [
    {name: 'Принтер струйный HP OfficeJet Pro 6230', price: '7 000', date:'2006', img:'1.jpeg',  type:'Strings'},
    {name: 'Принтер струйный HP Ink Tank 118', price: '8 000', date:'2006', img:'2.jpeg', type:'Strings'},
    {name: 'Принтер струйный HP Ink Tank 118', price: '8 000', date:'2006', img:'3.jpeg', type:'Strings'},
    {name: 'Принтер струйный HP Ink Tank 118', price: '8 000', date:'2006', img:'4.jpeg', type:'Strings'},
    {name: 'Принтер струйный HP Ink Tank 118', price: '8 000', date:'2006', img:'5.jpeg', type:'Strings'},
    {name: 'Принтер струйный HP Ink Tank 118', price: '8 000', date:'2006', img:'6.jpeg', type:'Strings'},
    {name: 'Принтер струйный HP Ink Tank 118', price: '8 000', date:'2006', img:'7.jpeg', type:'Strings'},
    {name: 'Принтер струйный HP Ink Tank 118', price: '8 000', date:'2006', img:'8.jpeg', type:'Strings'},

    {name: 'Принтер струйный Canon PIXMA G1820', price: '10 000', date:'2012', img:'3.jpg', type:'Keyboards'},
    {name: 'Принтер струйный HP Ink Tank 115', price: '9 000', date:'2007', img:'4.jpg', type:'Keyboards'},
    {name: 'Принтер струйный Canon PIXMA G1411', price: '8 500', date:'2013', img:'5.jpeg', type:'Keyboards'},
    {name: 'Принтер лазерный Pantum P2502', price: '7 500', date:'2015', img:'1.jpg', type:'Keyboards'},
    {name: 'Принтер лазерный HP LaserJet M111a', price: '12 000', date:'2014', img:'2.jpg', type:'Keyboards'},
    {name: 'Принтер лазерный Xerox Phaser 3020BI', price: '11 000', date:'2014', img:'3.jpg', type:'Keyboards'},

    {name: 'Принтер лазерный HP LaserJet M111w', price: '10 500', date:'2018', img:'4.jpg', type:'Bowed'},
    {name: 'Принтер лазерный Xerox Phaser 3020', price: '7 500', date:'2019', img:'5.jpg', type:'Bowed'},
    {name: 'Принтер лазерный HP LaserJet M111w', price: '10 500', date:'2018', img:'4.jpg', type:'Bowed'},
    {name: 'Принтер лазерный Xerox Phaser 3020', price: '7 500', date:'2019', img:'5.jpg', type:'Bowed'},
    {name: 'Принтер лазерный Xerox Phaser 3020', price: '7 500', date:'2019', img:'5.jpg', type:'Bowed'},
]
// < по возрастанию, > по убыванию

let cards = document.querySelector('.cards');

function reboot(){
    for(let i = 0; i < goods.length; i++){
        cards.innerHTML += "<div class='card' id='" + goods[i].type + "'> <h2><a href='tovar.html'>" + goods[i].name + "</a></h2> Цена: " + goods[i].price + "<br> Год производства: " + goods[i].date + "<br> <img src='../media/printers/" + goods[i].type + "/" + goods[i].img + "' alt=''> </div>";
    }
}
reboot();

document.querySelector('#Sort').addEventListener('click', function(){
    cards.innerHTML = '';
    goods.sort(function(a, b){
        var aname = a.name.toLowerCase(),
          bname = b.name.toLowerCase();
        if(aname < bname) return -1;
        if(aname > bname) return 1;
      });
      reboot();
});

document.querySelector('#Sortdesc').addEventListener('click', function(){
    cards.innerHTML = '';
    goods.sort(function(a, b){
        var aname = a.name.toLowerCase(),
          bname = b.name.toLowerCase();
        if(aname < bname) return -1;
        if(aname > bname) return 1;
      });
      goods.reverse();
      reboot();
});

document.querySelector('#SortDate').addEventListener('click', function(){
    cards.innerHTML = '';
    goods.sort((a, b) => parseFloat(a.date) - parseFloat(b.date));
    reboot();
});

document.querySelector('#SortDatedesc').addEventListener('click', function(){
    cards.innerHTML = '';
    goods.sort((a, b) => parseFloat(a.date) - parseFloat(b.date));
    goods.reverse();
    reboot();
});

document.querySelector('#SortPrice').addEventListener('click', function(){
    cards.innerHTML = '';
    goods.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    reboot();
});

document.querySelector('#SortPricedesc').addEventListener('click', function(){
    cards.innerHTML = '';
    goods.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    goods.reverse();
    reboot();
});

// Фильтер по типу
const laser = document.querySelectorAll('#laser');
const jet = document.querySelectorAll('#jet');

document.querySelector('#filterLaser').addEventListener('click', function(){
    filter('block','none');
});

document.querySelector('#filterJet').addEventListener('click', function(){
    filter('none','block');
});

document.querySelector('#filterAll').addEventListener('click', function(){
    filter('block','block');
});

function filter(a,b){
    for(i = 0; i < laser.length; i++){
        laser[i].style.display = a;
    }
    for(i = 0; i < jet.length; i++){
        jet[i].style.display = b;
    }
}
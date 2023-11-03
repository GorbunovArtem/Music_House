// Массив товаров
const goods = [
    {name: 'Струнный инструмент 1', price: '7 000', date:'2006', img:'1.jpeg',  type:'Strings'},
    {name: 'Струнный инструмент 2', price: '8 000', date:'2007', img:'2.jpeg', type:'Strings'},
    {name: 'Струнный инструмент 3', price: '8 000', date:'2009', img:'3.jpeg', type:'Strings'},
    {name: 'Струнный инструмент 4', price: '8 000', date:'2008', img:'4.jpeg', type:'Strings'},
    {name: 'Струнный инструмент 5', price: '8 000', date:'2006', img:'5.jpeg', type:'Strings'},
    {name: 'Струнный инструмент 6', price: '8 000', date:'2012', img:'6.jpeg', type:'Strings'},
    {name: 'Струнный инструмент 7', price: '8 000', date:'2011', img:'7.jpeg', type:'Strings'},
    {name: 'Струнный инструмент 8', price: '8 000', date:'2005', img:'8.jpeg', type:'Strings'},

    {name: 'Клавишный инструмент 1', price: '10 000', date:'2012', img:'1.jpeg', type:'Keyboards'},
    {name: 'Клавишный инструмент 2', price: '9 000', date:'2007', img:'2.jpeg', type:'Keyboards'},
    {name: 'Клавишный инструмент 3', price: '8 500', date:'2013', img:'3.jpeg', type:'Keyboards'},
    {name: 'Клавишный инструмент 4', price: '7 500', date:'2015', img:'4.png', type:'Keyboards'},
    {name: 'Клавишный инструмент 5', price: '12 000', date:'2014', img:'5.jpeg', type:'Keyboards'},
    {name: 'Клавишный инструмент 6', price: '11 000', date:'2014', img:'6.png', type:'Keyboards'},

    {name: 'Смычковый инструмент 1', price: '10 500', date:'2003', img:'1.jpeg', type:'Bowed'},
    {name: 'Смычковый инструмент 2', price: '7 500', date:'2002', img:'2.jpeg', type:'Bowed'},
    {name: 'Смычковый инструмент 3', price: '10 500', date:'2004', img:'3.jpeg', type:'Bowed'},
    {name: 'Смычковый инструмент 4', price: '7 500', date:'2005', img:'4.jpeg', type:'Bowed'},
]
//Определяем контэйнер в котором будут размещены товары
let cards = document.querySelector('.cards');
// Функция для отображения товаров на странице
function reboot(){
    for(let i = 0; i < goods.length; i++){
        cards.innerHTML += "<div class='card' id='" + goods[i].type + "'> <h3><a href='tovar.html'>" + goods[i].name + "</a></h3> Цена: " + goods[i].price + "<br> Год производства: " + goods[i].date + "<br> <img src='../images/goods/" + goods[i].type + "/" + goods[i].img + "' alt=''> </div>";
    }
}
reboot();
// Сортирока товаров по имени, по возрастанию
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
// Сортирока товаров по имени, по убыванию
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
// Сортирока товаров по дате, по возрастанию
document.querySelector('#SortDate').addEventListener('click', function(){
    cards.innerHTML = '';
    goods.sort((a, b) => parseFloat(a.date) - parseFloat(b.date));
    reboot();
});
// Сортирока товаров по дате, по убыванию
document.querySelector('#SortDatedesc').addEventListener('click', function(){
    cards.innerHTML = '';
    goods.sort((a, b) => parseFloat(a.date) - parseFloat(b.date));
    goods.reverse();
    reboot();
});
// Сортирока товаров по цене, по возрастанию
document.querySelector('#SortPrice').addEventListener('click', function(){
    cards.innerHTML = '';
    goods.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    reboot();
});
// Сортирока товаров по цене, по убыванию
document.querySelector('#SortPricedesc').addEventListener('click', function(){
    cards.innerHTML = '';
    goods.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    goods.reverse();
    reboot();
});

// Фильтер по типу
const Strings = document.querySelectorAll('#Strings');
const Keyboards = document.querySelectorAll('#Keyboards');
const Bowed = document.querySelectorAll('#Bowed');

document.querySelector('#filterStrings').addEventListener('click', function(){
    filter('block','none','none');
});

document.querySelector('#filterKeyboards').addEventListener('click', function(){
    filter('none','block','none');
});

document.querySelector('#filterBowed').addEventListener('click', function(){
    filter('none','none','block');
});

document.querySelector('#all').addEventListener('click', function(){
    filter('block','block','block');
});

function filter(a,b,c){
    for(i = 0; i < Strings.length; i++){
        Strings[i].style.display = a;
    }
    for(i = 0; i < Keyboards.length; i++){
        Keyboards[i].style.display = b;
    }
    for(i = 0; i < Bowed.length; i++){
        Bowed[i].style.display = c;
    }
}
const news = document.querySelectorAll('#new');
const confirms = document.querySelectorAll('#confirm');
const reject = document.querySelectorAll('#reject');

document.querySelector('#ordersFilterNew').addEventListener('click', function(){
    ordersFilter('block','none', 'none');
});

document.querySelector('#ordersFilterConfirm').addEventListener('click', function(){
    ordersFilter('none','block', 'none');
});

document.querySelector('#ordersFilterReject').addEventListener('click', function(){
    ordersFilter('none','none', 'block');
});

document.querySelector('#ordersFilterAll').addEventListener('click', function(){
    ordersFilter('block','block', 'block');
});

function ordersFilter(a,b,c){
    for(i = 0; i < news.length; i++){
        news[i].style.display = a;
    }
    for(i = 0; i < confirms.length; i++){
        confirms[i].style.display = b;
    }
    for(i = 0; i < reject.length; i++){
        reject[i].style.display = c;
    }
}
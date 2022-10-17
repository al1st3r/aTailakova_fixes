let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let count = document.getElementById('count');

minus.onclick = function () {
    if (count.value > 1) {
        count.value--
    }
}

plus.onclick = function () {
    count.value++
}

const gallery = document.querySelectorAll('img.product__gallery-img');

gallery.forEach(item =>  {
    item.addEventListener('mouseover',function (e) {
        let mainImage = document.getElementById('mainImage');
        mainImage.src = item.src;
    })
})
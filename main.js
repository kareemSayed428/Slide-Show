let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');

let caro = document.querySelector('.carosel');
let listItem = document.querySelector('.carosel .list');

let thumb = document.querySelector('.thumbnail');



//console.log(itemSlider[0]);



let clearClass;

nextBtn.addEventListener("click", function() {
    showSlider('next');
});
prevBtn.onclick = function() {
    showSlider('prev')
};

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carosel .list .item');
    let itemThumb = document.querySelectorAll('.thumbnail .item');


    if(type === 'next') {
        listItem.appendChild(itemSlider[0]); // listItem = list include all item - appendChild = put inside in last(put index 0 in last) - give me all list and onclick put index 0 in last
        //console.log(listItem);
        //console.log(itemSlider[0]);

        thumb.appendChild(itemThumb[0]);
        caro.classList.add('next');

    } else {
        let positionLastItem = itemSlider.length - 1;

        listItem.prepend(itemSlider[positionLastItem]); // positionLastItem = 3  - prepend = put inside in first - give me all list that include all item and onclick the last index become first
        thumb.prepend(itemThumb[positionLastItem]);
        caro.classList.add('prev');
        //console.log('iam else');
    }


    clearTimeout(clearClass);
    clearClass = setTimeout(() => {
        caro.classList.remove('next');
        caro.classList.remove('prev');
        //console.log('Remove Class');
    }, 1000);


}

let showInterval = setInterval(() => {
    nextBtn.click();
}, 5000);
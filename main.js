// const id = document.getElementById('one')
// const tag = document.getElementsByTagName('button');
// const classes = document.getElementsByClassName('btn');
// const button = document.querySelector('button');
// const buttons = document.querySelectorAll('.btn');


// console.log(button);
// console.log(buttons);

// buttons.forEach((elem) => {
//     console.log(elem);
// })

// const btn = document.querySelector('.btn');

// innerHtml, innerText, style

// console.log(btn.innerHTML);
// console.log(btn.innerText);


// btn.style.color = 'rgb(73, 3, 3)';
// btn.style.backgroundColor = 'red';


// btn.className = 'active'
// btn.classList.add('active');
// btn.classList.remove('active');


// btn.onclick = () => {
//     // btn.classList.add('active');
//     // const arr = btn.className.split(' ');


//     // if (arr.includes('active')) {
//     //     btn.classList.remove('active');
//     // } else {
//     //     btn.classList.add('active');
//     // }
//     btn.classList.toggle('active');
// }

// btn.ondblclick = () => {
//     console.log('double clicked');
// }
const white_btn = document.querySelector('.white')
const image = document.querySelector('.image')


white_btn.onclick = () =>{
    white_btn.classList.add('active_button_color')
    grey_btn.classList.remove('active_button_color')
    image.src = "imgs/mbp14-silver-select-202110 1.png"

} 
const grey_btn = document.querySelector('.space_grey')
grey_btn.onclick = ()=>{
    grey_btn.classList.add('active_button_color')
    white_btn.classList.remove('active_button_color')
    image.src = "imgs/mbp14-spacegray-select-202110 1.png"
}
const terabayt = document.querySelector('.terabayt')
const gb512 = document.querySelector('.GB512')
const tb2 = document.querySelector('.TB2')
const tb4 = document.querySelector('.TB4')
const price = document.querySelector('.price_list')
const memory = document.querySelector('.memory')

console.log(terabayt);
gb512.onclick=()=>{
    gb512.classList.add('active_memory_card')
    terabayt.classList.remove('active_memory_card')
    tb2.classList.remove('active_memory_card')
    tb4.classList.remove('active_memory_card')
    price.innerHTML = '$1999';
}
terabayt.onclick=()=>{
    gb512.classList.remove('active_memory_card')
    terabayt.classList.add('active_memory_card')
    tb2.classList.remove('active_memory_card')
    tb4.classList.remove('active_memory_card')
    price.innerHTML = '$2199';
}
tb2.onclick=()=>{
    gb512.classList.remove('active_memory_card')
    terabayt.classList.remove('active_memory_card')
    tb2.classList.add('active_memory_card')
    tb4.classList.remove('active_memory_card')
    price.innerHTML = '$2599';
}
tb4.onclick=()=>{
    gb512.classList.remove('active_memory_card')
    terabayt.classList.remove('active_memory_card')
    tb2.classList.remove('active_memory_card')
    tb4.classList.add('active_memory_card')
    price.innerHTML = '$3199';
}
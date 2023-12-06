const nav = document.getElementById('icon5');
const icon = document.getElementById('bars');
const test = document.getElementById('snd')
const cancelBtn = document.getElementById('cancelbtn')

icon.addEventListener('click',()=>{
    nav.classList.toggle('dropdown_menu')
    
})



// const snd=document.getElementById('usandclick');
// const r=document.getElementsByClassName('butt');

// r.addEventListener('click',()=>{
//     snd.classList.toggle('')
// })
let testBtn = document.getElementById('ratebtn')
// there is a standard variable naming
testBtn.addEventListener('click',()=>{
    test.classList.toggle('display')   
})
cancelBtn.addEventListener('click',()=>{
    test.classList.remove('display')   

})

const edc = document.getElementById('hiddenbox');
const show = document.getElementsByClassName('one')
console.log(show.length)
console.log(edc)

// show.addEventListener('click',()=>{
    
    
// })

for (i=0;i<show.length ;i++){
    show[i].addEventListener('click',()=>{
        edc.classList.toggle('width')
    })
}

function closeNav() {
    if (edc.classList.contains('w-100')) {
      edc.classList.remove('w-100');
    } else {
      edc.classList.remove('width');
    }
  }
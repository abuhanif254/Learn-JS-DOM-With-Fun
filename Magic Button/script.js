const btn = document.getElementById('magicbtn')
const title = document.getElementById('title')


btn.addEventListener('click', function(){
    document.body.style.backgroundColor = "gold";
    title.innerHTML = "WOW, Now I Am Golden"
    title.style.color = "Black"
})
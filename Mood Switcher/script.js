const modbtn = document.getElementById("modbtn")
const modtext = document.getElementById("mod-text")
const emoji = document.getElementById("emoji")

console.log(modbtn)
console.log(modtext)
console.log(emoji)




modbtn.addEventListener("click", function(){
    if(modtext.innerText === "Now I Am Relax😇" ){
        modtext.innerText = "Let's Start Party"
        emoji.innerText = "🥳"
        document.body.style.backgroundColor = "#ffce00"
        modbtn.innerText = "stop party"
    }else{
        modtext.innerHTML = "Now I Am Relax   😇"
        emoji.innerText = "ah!"
        document.body.style.backgroundColor = "#2464c5"
        modbtn.innerText = "start party"
    
    }
})
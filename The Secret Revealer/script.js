const revealBtn = document.getElementById("revealBtn")
const secretMessage = document.getElementById("secretMessage")



revealBtn.addEventListener("click", function(){
    secretMessage.classList.toggle("hidden")
    if(secretMessage.classList.contains('hidden')){
        revealBtn.innerText = "Reveal Message";
        revealBtn.style.backgroundColor = "red";

    }else{
        revealBtn.innerText = "Hide Message";
        revealBtn.style.backgroundColor = "green";
    }
})
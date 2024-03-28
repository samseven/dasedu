let header=document.querySelector(".headers")
window.addEventListener("scroll",()=>{
    if(window.scrollY >0)
    {
        header.classList.add("sticky",window.screenY > 0)
        console.log(window.scrollY)

    }
    else{

        header.classList.remove("sticky",window.screenY > 0)
    }
    
})
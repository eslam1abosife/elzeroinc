
let colorOption = document.querySelector(".option-box")

document.querySelector(".icon-container i").onclick = function () {
    this.classList.toggle("fa-spin")
    colorOption.classList.toggle("open")

};

let mainLocal = localStorage.getItem("color-item")

if(mainLocal !== null){
    document.documentElement.style.setProperty("--main-color", localStorage.getItem("color-item"))

    
    document.querySelectorAll(".color-option ul li").forEach((element) => {
        element.classList.remove("active")
        if(mainLocal === element.dataset.color ){
            element.classList.add("active")
        }
      })
    
}

let ULli = document.querySelectorAll(".color-option ul li")
ULli.forEach((li) => {
    li.addEventListener("click",function (e) {
      document.documentElement.style.setProperty("--main-color", e.target.dataset.color)

      localStorage.setItem("color-item",e.target.dataset.color )

     handleActive(e)

    })
})
function handleActive(ev) {

    ev.target.parentElement.querySelectorAll(".active").forEach((ele) => {
      ele.classList.remove("active")
    })
    ev.target.classList.add("active")
  
  }
  let overlay =  document.querySelector(".loading-overlay")
window.onload = setInterval(function () {
   overlay.remove()
},100)


let scrollTop = document.querySelector(".scroll-top")

window.onscroll = function () {
    if (this.scrollY >= 1000){
        scrollTop.classList.add("show")
    }else  {
        scrollTop.classList.remove("show")
    }
}
scrollTop.onclick = function () {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}



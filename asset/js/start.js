let selector = element => document.querySelector(element)

let homePage = selector(".homePage")
let searchPage = selector(".searchPage")
let startBtn = selector(".startButton")
startBtn.addEventListener('click',() =>{
homePage.style.opacity = 0
homePage.style.display = "none"
searchPage.style.display = "block"
})
setTimeout(()=>{
startBtn.style.opacity = 1
},1000)
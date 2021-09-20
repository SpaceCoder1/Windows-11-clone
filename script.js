let menu = document.getElementsByClassName("menu")[0]
let menuView = document.getElementsByClassName("menuView")[0]

menu.addEventListener("click", ()=>{
    if(menuView.style.opacity == "0"){
        menuView.style.opacity = "1"
    }
    else{
        menuView.style.opacity = "0"
    }
})

let edge = document.getElementsByClassName("edge")[0]
let edgeView = document.getElementsByClassName("edgeView")[0]

edge.addEventListener("click", ()=>{
    if(edgeView.style.opacity == "0"){
        edgeView.style.opacity = "1"
    }
    else{
        edgeView.style.opacity = "0"
    }
})


let time = document.getElementsByClassName("time")[0]
let timeView = document.getElementsByClassName("timeView")[0]

time.addEventListener("click", ()=>{
    if(timeView.style.opacity == "0"){
        timeView.style.opacity = "1"
    }
    else{
        timeView.style.opacity = "0"
    }
})

let file = document.getElementsByClassName("file")[0]
let fileView = document.getElementsByClassName("fileView")[0]

file.addEventListener("click", ()=>{
    if(fileView.style.opacity == "0"){
        fileView.style.opacity = "1"
    }
    else{
        fileView.style.opacity = "0"
    }
})

let search = document.getElementsByClassName("search")[0]
let  searchView = document.getElementsByClassName("searchView")[0]

search.addEventListener("click", ()=>{
    if(searchView.style.opacity == "0"){
        searchView.style.opacity = "1"
    }
    else{
        searchView.style.opacity = "0"
    }
})

let vs = document.getElementsByClassName("vs")[0]
let  vsView = document.getElementsByClassName("vsView")[0]

vs.addEventListener("click", ()=>{
    if(vsView.style.opacity == "0"){
        vsView.style.opacity = "1"
    }
    else{
        vsView.style.opacity = "0"
    }
})
const  deskmenu =document.getElementById("deskid");
const  menuIcon =document.getElementById("menuiconid");

menuIcon.onclick =function(){
    deskmenu.classList.toggle("open-menu");
    console.log("icon is clicked");

    if(deskmenu.classList.contains("open-menu")){
        menuIcon.src = "images/close.png";
    }else{
        menuIcon.src = "images/Union.png";
    }
}

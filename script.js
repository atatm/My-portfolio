const  menulink =document.getElementById("menuid");
const  menuIcon =document.getElementById("menuIcon");

menuIcon.onclick =function(){
    menulink.classList.toggle("openmenu");
    console.log("icon is clicked");

    if(menulink.classList.contains("openmenu")){
        menuIcon.src = "images/close.png";
    }else{
        menuIcon.src = "images/Union.png";
    }
}

"use strict";
const navLinks = document.querySelectorAll(".navLinks");
const btnShow = document.getElementById("btnShow");
const elementsHidden = document.querySelectorAll("aside > nav > .navLinks[data-hidden]");
// Left navigation bar animations
navLinks.forEach(function(e){
    e.onclick = function(){
        navLinks.forEach(function(e){
            e.classList.remove("active");
            e.firstElementChild.style.fontVariationSettings = "'FILL'0,'wght' 300,'GRAD' 200,'opsz' 48";
            e.lastElementChild.style.fontWeight = 400;
        });
        this.classList.add("active");
        this.firstElementChild.style.fontVariationSettings = "'FILL'1";
        this.lastElementChild.style.fontWeight = 500;
    }
})
btnShow.onclick = function(){
    this.firstElementChild.innerText = "Expand_Less";
    this.lastElementChild.innerText = "Show less";
    elementsHidden.forEach(function(e){
        if(e.hasAttribute("data-hidden")){
            if(e.getAttribute("data-hidden") === "true"){
                e.setAttribute("data-hidden","false");
            }else{
                e.setAttribute("data-hidden","true");
                btnShow.firstElementChild.innerText = "Expand_More";
                btnShow.lastElementChild.innerText = `Show ${elementsHidden.length} more`;
            }
        }
    });
}
const navLinksMini = document.querySelectorAll(".navLinksMini");
navLinksMini.forEach(function(e){
    e.onclick = function(){
        navLinksMini.forEach(function(e){
            e.classList.remove("active");
            e.firstElementChild.style.fontVariationSettings = "'FILL'0,'wght' 300,'GRAD' 200,'opsz' 48";
            e.lastElementChild.style.fontWeight = 400;
        });
        this.classList.add("active");
        this.firstElementChild.style.fontVariationSettings = "'FILL'1";
        this.lastElementChild.style.fontWeight = 500;
    }
});
const btnMenu = document.getElementById("btnMenu");
const aside = document.getElementById("aside");
const asideMini = document.getElementById("asideMini");
btnMenu.onclick = function(){
    if(asideMini.hasAttribute("data-show") && asideMini.hasAttribute("data-show")){
        if(asideMini.getAttribute("data-show") == "false" && aside.getAttribute("data-show") == "true"){
            asideMini.setAttribute("data-show","true");
            aside.setAttribute("data-show","false");
            asideMini.style.display = "block";
            aside.style.display = "none";
        }else{
            asideMini.setAttribute("data-show","false");
            aside.setAttribute("data-show","true");
            asideMini.style.display = "none";
            aside.style.display = "block";
        }
    }
}


const mediaMatchAsidestyle = window.matchMedia("(max-width: 992px)");
function changeNavLeft(event){
    if(event.matches){
        asideMini.style.display = "block";
        aside.style.display = "none";
        asideMini.setAttribute("data-show","true");
        aside.setAttribute("data-show","false");
    }else{
        asideMini.style.display = "none";
        aside.style.display = "block";
        asideMini.setAttribute("data-show","false");
        aside.setAttribute("data-show","true");
    }
}
mediaMatchAsidestyle.addEventListener("change",changeNavLeft);
changeNavLeft(mediaMatchAsidestyle);
// Top navigation bar animations

const topNavbar = document.querySelectorAll(".topNav");
const modalVideoCall = document.getElementById("modalVideoCall")
const modalNotifications =  document.getElementById("modalNotifications");
const modalAccount = document.getElementById("modalAccount");
const modalAppearance = document.querySelector(".modal-appearance");


topNavbar.forEach(function(e,index){
    e.addEventListener("click",function(){
        if(this.getAttribute("data-show") == "false"){
            this.firstElementChild.style.fontVariationSettings = "'FILL'1";
            this.setAttribute("data-show","true");
            if(index == 0){
                modalVideoCall.style.display = "flex";
                topNavbar[1].setAttribute("data-show","false");
                topNavbar[1].firstElementChild.style.fontVariationSettings = "'FILL'0,'wght' 300,'GRAD' 200,'opsz' 48";
                topNavbar[2].setAttribute("data-show","false");
                topNavbar[2].firstElementChild.style.fontVariationSettings = "'FILL'0,'wght' 300,'GRAD' 200,'opsz' 48";
                modalAppearance.style.display = "none";
 
            }else{
                modalVideoCall.style.display = "none";
                topNavbar[0].setAttribute("data-show","false");
                topNavbar[0].firstElementChild.style.fontVariationSettings = "'FILL'0,'wght' 300,'GRAD' 200,'opsz' 48";                 
            }
            if(index == 1){
                modalNotifications.style.display = "flex";
                topNavbar[0].setAttribute("data-show","false");
                topNavbar[0].firstElementChild.style.fontVariationSettings = "'FILL'0,'wght' 300,'GRAD' 200,'opsz' 48";
                topNavbar[2].setAttribute("data-show","false");
                topNavbar[2].firstElementChild.style.fontVariationSettings = "'FILL'0,'wght' 300,'GRAD' 200,'opsz' 48";
                modalAppearance.style.display = "none";
            }else{
                modalNotifications.style.display = "none";
                topNavbar[1].setAttribute("data-show","false");
                topNavbar[1].firstElementChild.style.fontVariationSettings = "'FILL'0,'wght' 300,'GRAD' 200,'opsz' 48";
            }
            if(index == 2){
                modalAccount.style.display = "flex";
                topNavbar[0].setAttribute("data-show","false");
                topNavbar[0].firstElementChild.style.fontVariationSettings = "'FILL'0,'wght' 300,'GRAD' 200,'opsz' 48";
                topNavbar[1].setAttribute("data-show","false");
                topNavbar[1].firstElementChild.style.fontVariationSettings = "'FILL'0,'wght' 300,'GRAD' 200,'opsz' 48";
            }else{
                modalAccount.style.display = "none";
                topNavbar[2].setAttribute("data-show","false");
                topNavbar[2].firstElementChild.style.fontVariationSettings = "'FILL'0,'wght' 300,'GRAD' 200,'opsz' 48";
            }
        }else{
            this.firstElementChild.style.fontVariationSettings = "'FILL'0,'wght' 300,'GRAD' 200,'opsz' 48";
            this.setAttribute("data-show","false");
            switch(index){
                case 0:
                    modalVideoCall.style.display = "none";
                    break;
                case 1:
                    modalNotifications.style.display = "none";
                    break;
                case 2:
                    modalAccount.style.display = "none";
                    break;   
            }
        }
    });
});

const appearance = document.getElementById("appearance");
const ArrowBack = document.getElementById("ArrowBack");

document.addEventListener("mouseup",function(e){
    closeIfCleckedOutside(e,modalVideoCall,topNavbar,0);
    closeIfCleckedOutside(e,modalNotifications,topNavbar,1);
    closeIfCleckedOutside(e,modalAccount,topNavbar,2);
    closeIfCleckedOutside(e,modalAppearance,topNavbar,2);

});

function closeIfCleckedOutside(e,modal,btn,index){ 
        if(!modal.contains(e.target) && e.target !== (btn[index].firstElementChild || e.target !== btn[index])){
            modal.style.display = "none";
            btn[index].setAttribute("data-show","false");
            btn[index].firstElementChild.style.fontVariationSettings = "'FILL'0,'wght' 300,'GRAD' 200,'opsz' 48";
        }
}
appearance.onclick = function(){
    modalAppearance.style.display = "flex";
    modalAccount.style.display = "none";
    topNavbar[2].firstElementChild.style.fontVariationSettings = "'FILL'1";
    topNavbar[2].setAttribute("data-show","true");
    topNavbar[2].onclick = function(){
        modalAppearance.style.display = "none";
    }
    ArrowBack.onclick = function(){
        modalAppearance.style.display = "none";
        modalAccount.style.display = "flex";
        topNavbar[2].firstElementChild.style.fontVariationSettings = "'FILL'1";
        topNavbar[2].setAttribute("data-show","true");
    };
   
};

const chooseLighting = document.querySelectorAll(".choose-lighting");

chooseLighting.forEach((e,index)=>{
    e.onclick = function(){
        chooseLighting.forEach((e)=>{
            e.firstElementChild.classList.remove("checked");
        });
        this.firstElementChild.classList.add("checked");
        window.localStorage.setItem("chooseLightingIndex",index);
        if(index == 0){
            const matchDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
            if(matchDarkMode.matches){
                document.body.classList.add("dark-mode");
                document.getElementById("logo").src = "imgs/logos/logo-dark-mode.png";

            }else{
                document.body.classList.remove("dark-mode");
                document.getElementById("logo").src = "imgs/logos/logo.png";

            }
        }
        if(index == 1){
            document.body.classList.add("dark-mode");
            document.getElementById("logo").src = "imgs/logos/logo-dark-mode.png";
        }
        if(index == 2){
            document.body.classList.remove("dark-mode");
            document.getElementById("logo").src = "imgs/logos/logo.png";
        }
    }
});
// check if choose light mode or dark mode or theme default for system
if(window.localStorage.getItem("chooseLightingIndex")){
    chooseLighting[window.localStorage.getItem("chooseLightingIndex")].click();
}




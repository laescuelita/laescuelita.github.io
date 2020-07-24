const dateToYMD = function (date) {
    var strArray=['Enero'
                 ,'Febrero'
                 ,'Marzo'
                 ,'Abril'
                 ,'Mayo'
                 ,'Junio'
                 ,'Julio'
                 ,'Agosto'
                 ,'Septiembre'
                 ,'Octubre'
                 ,'Noviembre'
                 ,'Diciembre'];
    var d = date.getDate();
    var m = strArray[date.getMonth()];
    var y = date.getFullYear();
    return '' + (d <= 9 ? '0' + d : d) + '-' + m + '-' + y;
}

let sysdate = new Date();
let headerAppId = document.getElementById("headerAppId"); 
let navbar = document.getElementById("navbar"); 
let updateButton = document.getElementById('updateDetails');
let cancelButton = document.getElementById('cancel');
let favDialog = document.getElementById('favDialog');
let divfooter = document.getElementById("divfooter");

 if(!!divfooter){
      divfooter.innerHTML="La Escuelita San Pedro Tlachichilco desde el año 2019 | "+dateToYMD(sysdate);
  }

const enableHeaderApp = function(p) {
      p.style.display ="none";   
}; 

  
if(screen.width<600){
   if(!!navbar){
    enableHeaderApp(navbar); 
   }
}else{
  if(!!headerAppId){
     enableHeaderApp(headerAppId); 
  }
}


const menuBtn = document.querySelector('.menu-btn');
const dialogOpenClose = function (){
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    favDialog.showModal();
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    favDialog.close();
  }
}; 

let menuOpen = false;
if(null!==menuBtn){
  menuBtn.addEventListener('click', dialogOpenClose);
}

if(!!closeDialogBtn){
  closeDialogBtn.addEventListener('click', dialogOpenClose);
}


 // Update button opens a modal dialog
 if(null!==updateButton){
    updateButton.addEventListener('click', function() {
      favDialog.showModal();
    });  
  }
  
  // Form cancel button closes the dialog box
  if(null!==cancelButton){
  cancelButton.addEventListener('click', function() {
    favDialog.close();
  });
 }
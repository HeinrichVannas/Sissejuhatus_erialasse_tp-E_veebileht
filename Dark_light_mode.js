function funktsioon() {
    var element = document.body;
    var button = document.getElementById('režiim');
    element.classList.toggle("tume_režiim");
    if (button.innerText === 'Tume režiim') {
        button.innerText = 'Hele režiim';
    } else {
        button.innerText = 'Tume režiim';
    }
    //tume režiim  saadud https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp, abiks integreerimisel chatgpt
    //teksti muutmise nupu sees sain chatgpt käest
 }

 /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  //https://www.w3schools.com/howto/howto_js_collapse_sidebar.asp
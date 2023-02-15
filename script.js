window.onscroll = function() {
    var header = document.querySelector("header");
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };


  function send(){
    document.getElementById("sent").innerHTML = "Message sent";
    document.getElementById("send").style.display = "none";
    
  }
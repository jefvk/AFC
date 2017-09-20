function main() {
          var figures = document.getElementsByTagName("figure");
          var teller = 0;
          while (teller < figures.length) {
            figures[teller].innerHTML = "<span class='upper'>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</span>" + "<span class='left'>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</span>" +  figures[teller].innerHTML + "<span class='bottom'>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</span><span class='right'>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</span>";
            teller++;
          }


}

function typer(){
  var typed = new Typed('.HeadTitle', {
    strings: ["<strong>Jef's</strong> <span>AFC</span>", "<strong>Jef's</strong> <span>A</span>dvanced ^200 <span>F</span>ront-end ^200 <span>C</span>oding", "<strong>Jef's</strong> <span>AFC</span>"],
    typeSpeed: 30,
    smartBackspace: true,
    backSpeed: 50
  });
}



window.onload = function() {
       main();
}

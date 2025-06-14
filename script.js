


const text = "Hi! I'm a passionate developer and IT professional with a background in Information Technology. I love solving technical problems and building useful applications.";
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      document.getElementById("typewriter").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }
  typeWriter();
  
/*----*/



let count = 0;

/*home to about*/

window.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowDown' && count === 0) {
      e.preventDefault();
      window.location.href = "#about";
      count++;
    }
  });

/*----*/

/*about to projects*/

window.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowDown' && count === 1) {
      e.preventDefault();
      window.location.href = "#projects";
      count++;
    }
  });

/*----*/

/*home to about*/

window.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowDown' && count === 2) {
      e.preventDefault();
      window.location.href = "#contact";
      count++;
    }
  });

/*----*/


  
  
  

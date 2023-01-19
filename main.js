let words = ["testing", "design", "frontend", "backend"];
let lastWord = (words.length -1);
let i = 0;
let speed = 150;
let j = 0;

function typeWriter() {
    
  if (i < words.length) {
    if(j ==0){
        document.getElementById("animatedWords").textContent = "";
    }
    if (j < words[i].length) {
      document.getElementById("animatedWords").textContent +=
        words[i].charAt(j);
        
      j++;
      setTimeout(typeWriter, speed);
    } else {
      
      j = 0;
      i++;
      setTimeout(typeWriter, 600);
    }
  } else {
    
    i = 0;
    
    setTimeout(typeWriter, 10);
  }
}

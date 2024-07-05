let modebtn= document.querySelector('#modebtn');
let pass= document.querySelector('.pass');

let mode="light";

modebtn.addEventListener("click", () => {
    if (mode=="light"){
        mode="dark";
        document.querySelector("main").style.backgroundColor="black";
        document.querySelector("p1").style.color="#f1faee";
    }
    else{
        mode="light";
        document.querySelector("main").style.backgroundColor="white";
              document.querySelector("p1").style.color="#001d3d";
    }
    console.log(mode);
})
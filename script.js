alert("Welcome to my page! When you're done, please close any pages that were opened in a new tab and REFRESH. Thank you!");

var theme = 0;

function clickFunction() {
  if (theme==0){
    document.getElementById("button").innerHTML=
   "Click to revert colors.";
    document.getElementById("click").style.color="black";
    document.getElementById("clique").style.color="white";
    document.getElementById("dema").style.color="white";
    document.getElementById("Title").style.color="black";
    document.getElementById("Body").style.color="black";
    document.getElementById("Link").style.color="black";
    document.getElementById("aerial").style.color="blue";
    document.getElementById("here").style.color="blue";
    document.body.style.backgroundColor = "white";
    theme=1;
    //the current theme is black
    //change it to white
    //and change theme to 1
  } else if (theme==1) {
    //the current theme is white
    //change it to black
    //and change theme to 0
    document.getElementById("button").innerHTML=
   "Click for accessible colors.";
    document.getElementById("click").style.color="#FBE30D";
    document.getElementById("clique").style.color="black";
    document.getElementById("dema").style.color="black";
    document.getElementById("Title").style.color="white";
    document.getElementById("Body").style.color="	#FBE30D";
    document.getElementById("Link").style.color="	#FBE30D";
    document.getElementById("aerial").style.color="	#FBE30D";
    document.getElementById("here").style.color="	#FBE30D";
    document.body.style.backgroundColor = "black";
    theme=0;
  }

}

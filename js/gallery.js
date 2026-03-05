function upDate(previewPic){
  
  console.log("Hovered over: " + previewPic.alt);
   document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";

  document.getElementById('image').innerHTML = previewPic.alt;

	}

	function unDo(){
  document.getElementById('image').style.backgroundImage = "url('')";
  
   document.getElementById('image').innerHTML = "Hover over an image below to display here.";

	}

function addTabFocus() {
  console.log("Tab focus function triggered"); 
  
  let images = document.querySelectorAll(".preview");

  for (let i = 0; i < images.length; i++) {
    console.log("Adding tabindex to image: " + i);
    
    images[i].setAttribute("tabindex", "0");
  }
}

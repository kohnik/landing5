openPhoto();
function openPhoto() {
    let feauter__content = document.querySelector(".feauter__content");
  
    console.log(feauter__content);
    feauter__content.onclick = function (event) {
      if (event.target.className == "feauter__img") {
        let feauter__img_active = ce("img", null, "feauter__img_active");
        let body__black = ce("div", null, "body__black");
        feauter__img_active.src = event.target.src;
        feauter__img_active.style.display = "block";
      
        body__black.style.cssText = `
        
        z-index:99;
        position:fixed;
        top:0px;
        width:100%;
        height:100%;
        background: rgba(0, 0, 0, 0.425);
        `;
        document.body.append(body__black);
        feauter__content.append(feauter__img_active);
        
        closePhoto();
      }
    };
  }
  
  function closePhoto()
  {
    
    let body__black=document.querySelector(".body__black")
    body__black.onclick=function(event)
    {
      console.log(1)
      if(event.target.className=="body__black")
      {
        
        let feauter__img_active=document.querySelector(".feauter__img_active");
        feauter__img_active.remove();
        body__black.remove();
      }
    }
  }
  function ce(name = "div", text, className, event, fn) {
    let elem = document.createElement(name);
    text != undefined ? (elem.innerHTML = text) : null;
    className != undefined && className != null
      ? (elem.className = className)
      : null;
    event != undefined ? elem.addEventListener(event, fn) : null;
    return elem;
  }
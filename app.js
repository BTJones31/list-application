const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    var listEntry=document.getElementById("listEntry").value;
    var li = document.createElement("li");
    event.preventDefault();
    document.getElementById("listItem").appendChild(li).textContent = listEntry;
    document.getElementById("listEntry").value = ""
    
});

document.getElementById("listItem").addEventListener("click",function(e) {
    let tgt = e.target;
    if (tgt.tagName.toUpperCase() == "LI") {
      tgt.style.textDecoration= "line-through";
    } 
  });
``

  document.getElementById("listItem").addEventListener("dblclick",function(e) {
    let tgt = e.target;
    if (tgt.tagName.toUpperCase() == "LI") {
        tgt.parentNode.removeChild(tgt); 
    } 
  });

  
  document.getElementById("listItem").addEventListener("focus",function(e) {
    let tgt = e.target;
    if (tgt.tagName.toUpperCase() == "LI") {
        tgt.style.textDecoration='underline'; 
    } 
  });

  
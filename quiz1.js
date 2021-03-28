function myFunction() {
    var btn = document.createElement("BUTTON");   
    btn.innerHTML = "Change this document."; 
    document.body.appendChild(btn);
    btn.addEventListener("click",change);
}
function change() {
    var header = $('H1').html("CSIE@CGU");
    //header.innerHTML = "CSIE@CGU";
    var para = $('P').html("怎麼那麼棒！！.");
    //para.innerHTML = "怎麼那麼棒！！.";
}
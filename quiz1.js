function myFunction() {
    var btn = document.createElement("BUTTON");   
    btn.innerHTML = "Change this document."; 
    document.body.appendChild(btn);
    btn.addEventListener("click",change);
}
function change() {
    var header = $('H1')[0];
    header.innerHTML = "CSIE@CGU";
    var para = $('P')[0];
    para.innerHTML = "怎麼那麼棒！！.";
}
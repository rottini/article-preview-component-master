
var button = document.getElementById("share_button");


button.addEventListener("click", function(){

    var ballon = document.getElementById("mensage_box");
    
if (ballon.style.display === "none") {
    ballon.style.display = "block"
    button.classList.add("share_button");

} else {
    ballon.style.display = "none";
    button.classList.remove("share_button");
}

});
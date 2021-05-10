const scrollTopPosition = 50

window.onscroll = function() {
    if (document.body.scrollTop > scrollTopPosition 
        || document.documentElement.scrollTop > scrollTopPosition) {
            document.querySelector("#headerbar").classList.add("headerback");
        } else {
            document.querySelector("#headerbar").classList.remove("headerback");
        }
    }
    

document.querySelector("#navbutton").onclick = function() {
    document.querySelector("#navbar").classList.toggle("visible");
}
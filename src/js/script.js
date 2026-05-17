window.onload = function(){

    setTimeout(() => {

        document.getElementById("hero").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("hero").style.display = "none";
        }, 500);

    }, 2000);

}
window.onload = () => {

    const loader = document.getElementById("hero");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 1000);

}
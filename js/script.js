{
    const welcome = () => {
        console.log("Witam wszystkich ciekawskich! :D");
    }

    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-sectionSpan");

        body.classList.toggle("ciemny");

        if (body.classList.contains("ciemny")) {
            themeName.innerText = "biały";
        } else {
            themeName.innerText = "ciemny";
        }
    }

    const init = () => {
        const button = document.querySelector(".js-sectionButton");

        button.addEventListener("click", toggleBackground);

        welcome();
    };

    init();
}
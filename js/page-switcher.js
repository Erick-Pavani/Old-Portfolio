window.addEventListener("load", () => {
    setActivePage("Home-Page");
});

const alternatePages = document.querySelectorAll(".alternate-page");

function setActivePage(name) {
    alternatePages.forEach((page) => {
        if (name === page.getAttribute("title")) {
            page.removeAttribute("disabled");
        } else {
            page.setAttribute("disabled", "true");    
        }
    });
}

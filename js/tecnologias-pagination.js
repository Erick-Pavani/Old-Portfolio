const alternateTab = document.querySelectorAll(".tecnologias_tabs");

function setActiveTab(new_tab) {
    alternateTab.forEach((tab) => {
        if (new_tab === tab.getAttribute("title"))
        {
            if (tab.classList.contains("disabled")) {
                tab.classList.toggle("disabled");
            }
        }
        else if (!tab.classList.contains("disabled")) {
            tab.classList.toggle("disabled");
        }
    })
}
if (window.innerWidth <= 500 ) {
    var nav = document.querySelector(".mobileMenu"),
        navList = nav.querySelectorAll("li"),
        totalNavList = navList.length;
} else {
    var nav = document.querySelector(".nav"),
        navList = nav.querySelectorAll("li"),
        totalNavList = navList.length;
}
const allSections = document.querySelectorAll(".section"),
    totalSections = allSections.length;

for (let i = 0; i < totalNavList; i++) {
    removeBackSection();
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        for (let i = 0; i < totalSections; i++)
        {
            allSections[i].classList.remove("back-section");
        }
        for (let j = 0; j < totalNavList; j++)
        {
            if (navList[j].querySelector("a").classList.contains("active"))
            {
                addBackSection(j);    
            }
            navList[j].querySelector("a").classList.remove("active");    
        }
        this.classList.add("active")
        showSection(this);
    })
}
function addBackSection(num)
{
    allSections[num].classList.add("back-section");
}
function removeBackSection()
{
    for (let i = 0; i < totalSections; i++) {
        allSections[i].classList.remove("back-section");
    }
}
function showSection(element)
{
    for (let i = 0; i < totalSections; i++)
    {
        allSections[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}
function updateNav(element)
{
    for (let i = 0; i < totalNavList; i++)
    {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active");   
        }
    }
}

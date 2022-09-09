if (window.innerWidth <= 500 ) {
    document.querySelectorAll(".projects_box a").style.pointerEvents = "none";
    const projects = document.querySelectorAll(".projects_box");
    projects.forEach(element => {
        element.addEventListener("click", function () {
            var links = element.querySelectorAll("a");
            links.forEach(element => {
                element.style.pointerEvents = "auto";
            })
        });    
    });
    // window.addEventListener("click", e => {
    //     links.forEach(element => {
    //         if (e != element) {
    //             const links = element.querySelectorAll("a");
    //             links.forEach(link => {
    //                 link.style.pointerEvents = "none";
    //             })
    //         }
    //     });
    // })
}


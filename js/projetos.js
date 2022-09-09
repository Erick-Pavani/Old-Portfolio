if (window.innerWidth <= 500 ) {
    var projects_counter = 0;
    var projects_loop_counter = 0;
    const projects = document.querySelectorAll(".projects_box");
    projects.forEach(element => {
        element.addEventListener("click", function () {
            projects_counter++;
            const links = element.querySelectorAll("a");
            links.forEach(element => {
                element.style.pointerEvents = "auto";
            })
        });    
    });
    // window.addEventListener("click", e => {
    //     let handle
    //     if (e.target.matches(".handle")) {
    //         handle = e.target
    //     } else {
    //         handle = e.target.closest(".handle")
    //     }
    //     if (handle != null) {
    //         onHandleClick(handle)
    //     }
    // })
}


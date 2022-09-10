// if (window.innerWidth <= 500 ) {
    
//     const start = document.querySelectorAll(".projects_box a");
//     start.forEach(link => {
//         link.style.pointerEvents = "none";
//     });
    
//     // const projects = document.querySelectorAll(".projects_box");
//     // projects.forEach(element => {
//     //     element.addEventListener("click", function () {
//     //         const links = element.querySelectorAll("a");
//     //         links.forEach(element => {
//     //             element.style.pointerEvents = "auto";
//     //         })
//     //     });    
//     // });

//     window.addEventListener("click", e => {
//         const links = document.querySelectorAll(".projects_box a");
//         console.log()
//         links.forEach(element => {
//             // if (e !== element.parentNode && !element.parentNode.contains(e)) {
//             if (e !== element.parentNode) {
//                 console.log("teste")
//                 element.style.pointerEvents = "none";
//             } else {
//                 element.style.pointerEvents = "auto";
//                 console.log("Clicou no parent node")
//             }
//         });
//     })
// }


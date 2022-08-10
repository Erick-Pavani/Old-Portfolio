document.addEventListener("click", e => {
    let handle
    if (e.target.matches(".handle")) {
        handle = e.target
    } else {
        handle = e.target.closest(".handle")
    }
    if (handle != null) {
        onHandleClick(handle)
        setTitle();
    }
})


document.addEventListener("load", () => {
    const titulo = document.querySelector(".title");
    titulo.innerHTML = "Front-End"
})

const throttleProgressBar = throttle(() => {
    document.querySelectorAll(".barra-progresso").forEach(calculateProgressBar)
}, 250);
window.addEventListener("resize", throttleProgressBar);

document.querySelectorAll(".barra-progresso").forEach(calculateProgressBar);

function calculateProgressBar(progressBar) {
    progressBar.innerHTML = "";
    const slider = document.querySelectorAll(".slider")[0];
    const itemCount = document.querySelectorAll(".tab").length;
    let sliderIndex = parseInt(
        getComputedStyle(slider).getPropertyValue("--slider-index")
    );
    const progressBarItemCount = itemCount;

    if (sliderIndex >= progressBarItemCount) {
        slider.style.setProperty("--slider-index", progressBarItemCount - 1);
        sliderIndex = progressBarItemCount - 1;
    }

    for (let i = 0; i < progressBarItemCount; i++) {
        const barItem = document.createElement("div");
        barItem.classList.add("progress-item");
        if (i === sliderIndex) {
            barItem.classList.add("active");
        }
        progressBar.append(barItem);
    }
}

function onHandleClick(handle) {
    const progressBar = document.querySelectorAll(".barra-progresso")[0];
    const slider = document.querySelectorAll(".slider")[0];
    const sliderIndex = parseInt(
        getComputedStyle(slider).getPropertyValue("--slider-index")
    );
    const progressBarItemCount = progressBar.children.length;
    if (handle.classList.contains("left-handle")) {
        if (sliderIndex - 1 < 0) {
            slider.style.setProperty("--slider-index", progressBarItemCount - 1)
            progressBar.children[sliderIndex].classList.remove("active")
            progressBar.children[progressBarItemCount - 1].classList.add("active")
        } else {
            slider.style.setProperty("--slider-index", sliderIndex - 1)
            progressBar.children[sliderIndex].classList.remove("active")
            progressBar.children[sliderIndex - 1].classList.add("active")
        }
    }

    if (handle.classList.contains("right-handle")) {
        if (sliderIndex + 1 >= progressBarItemCount) {
            slider.style.setProperty("--slider-index", 0)
            progressBar.children[sliderIndex].classList.remove("active")
            progressBar.children[0].classList.add("active")
        } else {
            slider.style.setProperty("--slider-index", sliderIndex + 1)
            progressBar.children[sliderIndex].classList.remove("active")
            progressBar.children[sliderIndex + 1].classList.add("active")
        }
    }
}

function throttle(cb, delay = 1000) {
    let shouldWait = false
    let waitingArgs
    const timeoutFunc = () => {
        if (waitingArgs == null) {
            shouldWait = false
        } else {
            cb(...waitingArgs)
            waitingArgs = null
            setTimeout(timeoutFunc, delay)
        }
    }
    return (...args) => {
        if (shouldWait) {
            waitingArgs = args
            return
        }
        cb(...args)
        shouldWait = true
        setTimeout(timeoutFunc, delay)
    }
}

function setTitle() {
    const slider = document.querySelectorAll(".slider")[0];
    let sliderIndex = parseInt(
        getComputedStyle(slider).getPropertyValue("--slider-index")
    );
    const titulo = document.querySelector(".title");
    if(sliderIndex === 0) {
        titulo.innerHTML = "Front-End";
    } else if (sliderIndex === 1) {
        titulo.innerHTML = "Back-End";
    } else {
        titulo.innerHTML = "Gerais";
    }
}

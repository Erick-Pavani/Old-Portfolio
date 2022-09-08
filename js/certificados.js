const sobreMim = document.querySelector(".SobreMim .background");
const certificados = document.querySelector(".certificadosPage");


function showCertificados() {
    sobreMim.classList.toggle("hidden");
    certificados.classList.toggle("hidden");
}

function resetCertificados() {
    if (sobreMim.classList.contains("hidden")) {
        sobreMim.classList.toggle("hidden");
        certificados.classList.toggle("hidden");
    }
}
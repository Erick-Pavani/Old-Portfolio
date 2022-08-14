function SendMail() {
    var params = {
        subject : document.getElementById("mailSubject").value,
        from_name : document.getElementById("mailName").value,
        email_id : document.getElementById("mailEmail").value,
        message : document.getElementById("mailMessage").value
    }
    emailjs.send("service_mrdgala","template_5a1i30m", params).then(function (res) {
        document.getElementById("mailSubject").value = "";
        document.getElementById("mailName").value = "";
        document.getElementById("mailEmail").value = "";
        document.getElementById("mailMessage").value = "";
    });
}
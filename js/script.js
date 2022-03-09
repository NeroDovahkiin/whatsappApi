document.querySelector("#send_message").addEventListener("click", function () {
    let message = document.querySelector("#message").value;
    let number = document.querySelector("#number").value;
    let prefix = document.getElementById("country").value;

    var url =
        "https://wa.me/send?text=" +
        encodeURIComponent(message) +
        "&phone=" +
        encodeURIComponent(prefix + number);

    window.open(url);
});

// location message
document.querySelector("#ubicacion").addEventListener("click", function () {
    let message = document.querySelector("#message");
    let hora = new Date().getHours();
    let saludo = () => {
        if (hora >= 5 && hora < 12) {
            return "Buenos días!";
        } else if (hora >= 12 && hora < 21) {
            return "Buenas tardes!";
        } else {
            return "buenas noches!";
        }
    };

    message.innerText = ` ${saludo()} Aquí el auxilio mecánico...Puede enviar la ubicación por este medio. \n
  Por favor enviar la ubicación que dice "UBICACIÓN ACTUAL", no la que
   dice "en tiempo real"... Gracias!
  `;
});
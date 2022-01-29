const onChange = () => {
    let celular = "542915049023";
    let asistencia = document.getElementById("asistencia");
    let nombre = document.getElementById("name").value.replace(" ", "%20");
    let menu = document.getElementById("menu");
    let cantidad = document.getElementById("cantidad");
    let linkWhatsapp = "";
    
    if(asistencia.value=='No'){
        menu.setAttribute("disabled", "true");
        cantidad.setAttribute("disabled", "true");
        linkWhatsapp = `https://api.whatsapp.com/send?phone=${celular}&text=Soy%20${nombre}%20,%20No%20voy%20chau%20`;
    } else {
        menu.removeAttribute("disabled");
        cantidad.removeAttribute("disabled");
        linkWhatsapp = `https://api.whatsapp.com/send?phone=${celular}&text=Soy%20${nombre}%20,%20somos%20${cantidad.value},%20menu%20${menu.value}`;
    }
    let botonAsistencia = document.getElementById("confirmacion");
    botonAsistencia.setAttribute("href", linkWhatsapp);
}

/* obtengo datos de una persona ficticia con la api de randomuser */
let url = "https://randomuser.me/api/?inc=gender,dob,name,email,phone,picture,phone,location,nat&nat=us&gender=male&noinfo&results=1"
fetch(url)
    .then(Response => Response.json())
    .then(json => {
        //console.log(json)
        let data = json.results[0];
        let nombre = (data.name.first + " " + data.name.last);
        // let nombre = (`${data.name.first} ${data.name.last}`);
        let location = (`${data.location.city}, ${data.location.state}`);
        document.getElementById("introduccion").innerHTML = (`Hola, mi nombre es ${nombre} y este es mi Curriculum vitae:`);
        document.getElementById("titulo").innerHTML = (`${nombre}<br>Curriculum`);
        document.getElementById("cara").src = data.picture.large;
        document.getElementById("parrafo-introduccion").innerHTML= (`Soy un estudiante avanzado de programacion en la universidad informática de ${data.location.state}. Actualmente a mis ${data.dob.age} años de edad vivo en ${location} y estoy interesado en tener nuevas experiencias laborales como developer para sumar nuevos conocimientos y afianzar los que ya tengo.`);
        document.getElementById("mail").innerHTML += (data.email);
        document.getElementById("numero").innerHTML += (data.phone);
        document.getElementById("ubicacion").innerHTML += (location);
    });
;
/* logica para los botones que muestran informacion en la section proyectos */
document.getElementById("button1").addEventListener("click", function(){
    cambiarDisplay(document.getElementById("parrafo1"));
});
document.getElementById("button2").addEventListener("click", function(){
    cambiarDisplay(document.getElementById("parrafo2"));
});
document.getElementById("button3").addEventListener("click", function(){
    cambiarDisplay(document.getElementById("parrafo3"));
});
function cambiarDisplay (x){
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}



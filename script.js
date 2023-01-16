
/* obtengo datos de una persona ficticia con la api de randomuser */
let url = "https://randomuser.me/api/?inc=gender,dob,name,email,phone,picture,phone,location,nat&nat=us&gender=male&noinfo&results=1"
fetch(url)
    .then(Response => Response.json())
    .then(json => {
        console.log(json)
        let data = json.results[0];
        let nombre = (data.name.first + " " + data.name.last);
        document.getElementById("introduccion").innerHTML = ("Hola, mi nombre es " + nombre + " y este es mi Curriculum vitae:");
        document.getElementById("titulo").innerHTML = (nombre + "<br> Curriculum");
        document.getElementById("cara").src=data.picture.large;
        document.getElementById("parrafo-introduccion").innerHTML= ("Soy un estudiante avanzado de programacion en la facultad de informática de " + data.location.state + ". Actualmente a mis "+data.dob.age+" años de edad vivo en " + data.location.city + ", " + data.location.state + " y estoy interesado en tener nuevas experiencias laborales como developer para sumar nuevos conocimientos y afianzar los que ya tengo.");
        console.log(document.getElementById("cara"))
    });
;


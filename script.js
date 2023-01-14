
/* obtengo datos de una persona ficticia con la api de randomuser */
let url = "https://randomuser.me/api/?inc=gender,name,email,phone,picture,phone,location,nat&nat=us&gender=male&noinfo&results=1"
fetch(url)
    .then(Response => Response.json())
    .then(json => {
        console.log(json)
        let data = json.results[0];
        let nombre = (data.name.first + " " + data.name.last);
        document.getElementById("introduccion").innerHTML = ("Hola, mi nombre es " + nombre + " y este es mi Curriculum vitae:");
        document.getElementById("titulo").innerHTML = (nombre + "<br> Curriculum");
        document.getElementById("cara").src=data.picture.large;
        document.getElementById("parrafo-introduccion").innerHTML= ("Soy un estudiante avanzado de programacion en la facultad de informática de la Universidad Nacional de " + data.location.city + ", " + data.location.state + ". Actualmente estoy interesado en tener mi primera experiencia laboral como programador/developer para sumar nuevos conocimientos y afianzar los que ya tengo.");
        console.log(document.getElementById("cara"))
    });
;


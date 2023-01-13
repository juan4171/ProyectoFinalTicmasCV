
/* obtengo datos de una persona ficticia con la api de randomuser */
let url = "https://randomuser.me/api/?inc=gender,name,email,phone,picture,phone,location,nat&nat=us&gender=male&noinfo&results=1"
fetch(url)
    .then(Response => Response.json())
    .then(json => {
        console.log(json)
        let data = json.results[0];
        let nombre = (data.name.first + " " + data.name.last);
        document.getElementById("introduccion").innerHTML = ("Hola, mi nombre es " + nombre + " y esta es mi presentacion:");
        document.getElementById("titulo").innerHTML = (nombre + "<br>Curriculum vitae") ;
        document.getElementById("cara").src=data.picture.large;
        console.log(document.getElementById("cara"))
    });
;


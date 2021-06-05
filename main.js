const tabla = document.querySelector("#lista");
const info = document.querySelector("#footer");

const cargaInfo = () => {
    const xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users")
    
    xhr.addEventListener("load", (data) => {
        const datosJSON = JSON.parse(data.target.response);
        
        tabla.innerHTML = " ";
        info.innerHTML = " ";

        for (const userInfo of datosJSON){
            let fila = tabla.insertRow(-1);
            fila.innerHTML = `<td>${userInfo.name}</td>
                              <td>${userInfo.username}</td>
                              <td>${userInfo.email}</td>`;
                              
        // tabla.appendChild(fila);
        }

        let descripcion = info.insertRow();
        descripcion.innerHTML = "<td colspan=3> Datos Cargados con AJAX </td colspan=3>"; 
        // info.appendChild(descripcion);
    });
    
    xhr.send();
    
}
    const btn = document.querySelector("#btnAjax");
    btn.addEventListener("click", cargaInfo)


//********************************************************************* */

const url = "https://jsonplaceholder.typicode.com/users";


const devuelveInfo = () => {
    tabla.innerHTML = " ";
    info.innerHTML = " ";

    fetch(url)
    .then(rpta => rpta.json())
    .then(data => {
        for (userInfo of data){
            let fila = lista.insertRow();
            fila.innerHTML = `<td>${userInfo.name}</td>
            <td>${userInfo.username}</td>
            <td>${userInfo.email}</td>
            `;
            
            // tabla.appendChild(fila);
        }
        
    })
    .catch(err => console.log(err))

    let descripcion = info.insertRow();
    descripcion.innerHTML = "<td colspan=3> Datos cargados con Fetch </td>"
}


const btn2 = document.querySelector("#btnFetch");
btn2.addEventListener("click", devuelveInfo)



//DOM
let escribirTarea=document.querySelector("#editor")
let btnAgregar=document.querySelector("#btn-agregar")
let tareasTotales=document.querySelector("#total")
let tareasRealizadas=document.querySelector("#realizadas")
let list=document.querySelector("#listado")
let btnRealizado=document.querySelector("#itemBtn")
let Realizado=document.querySelector("#itemDesc")

//VARIABLES
let tareas=[
    {id:"0000000000001",tarea:"Levantarse a las 7:00 am",completado:false},
    {id:"0000000000002",tarea:"Arreglar la cama",completado:false},
    {id:"0000000000003",tarea:"Entrenar por 1h",completado:false}
]

let totales=tareas.length
tareasTotales.innerHTML=totales

let realizadas=0
tareasRealizadas.innerHTML=realizadas

//FUNCIONES
for (let tareasList of tareas) {
    const template=`
        <div class="item">
            <ul id="itemId" style="color:${tareasList.completado ? 'green' : 'black'}">${tareasList.id}</ul>
            <ul id="itemDesc" style="color:${tareasList.completado ? 'green' : 'black'}">${tareasList.tarea}</ul>
            <ul><button id="itemCheck" onclick="marcar(${tareasList.id})">OK</button></ul>
            <ul><button id="itemBtn" onclick="borrar(${tareasList.id})">X</button></ul>
        </div>
    `
    list.innerHTML+=template
}

function borrar(id) {
    const indexBorrar=tareas.findIndex((ele)=>ele.id==id)
    tareas.splice(indexBorrar,1)
    
    let html=""
    for (let tareasList of tareas) {
        html+=`
            <div class="item">
                <ul id="itemId" style="color:${tareasList.completado ? 'green' : 'black'}">${tareasList.id}</ul>
                <ul id="itemDesc" style="color:${tareasList.completado ? 'green' : 'black'}">${tareasList.tarea}</ul>
                <ul><button id="itemCheck" onclick="marcar(${tareasList.id})">OK</button></ul>
                <ul><button id="itemBtn" onclick="borrar(${tareasList.id})">X</button></ul>
            </div>
        `
        list.innerHTML=html
    }

    let totales=tareas.length
    tareasTotales.innerHTML=totales

    let realizadas = tareas.filter(tarea => tarea.completado===true).length;
    tareasRealizadas.innerHTML=realizadas
}

function marcar(id) {
    const indexMarcar = tareas.findIndex((ele) => ele.id == id)
    tareas[indexMarcar].completado = !tareas[indexMarcar].completado
    
    let html=""
    for (let tareasList of tareas) {
        html+=`
            <div class="item">
                <ul id="itemId" style="color:${tareasList.completado ? 'green' : 'black'}">${tareasList.id}</ul>
                <ul id="itemDesc" style="color:${tareasList.completado ? 'green' : 'black'}">${tareasList.tarea}</ul>
                <ul><button id="itemCheck" onclick="marcar(${tareasList.id})">OK</button></ul>
                <ul><button id="itemBtn" onclick="borrar(${tareasList.id})">X</button></ul>
            </div>
        `
        list.innerHTML=html
        
        let realizadas = tareas.filter(tarea => tarea.completado===true).length;
        tareasRealizadas.innerHTML=realizadas
    }
}

//EVENTOS
btnAgregar.addEventListener("click",()=>{
    const nuevaTarea=escribirTarea.value
    tareas.push({id:Date.now(),tarea:nuevaTarea,completado:false})
    escribirTarea.value=""

    let html=""
    for (let tareasList of tareas) {
        html+=`
            <div class="item">
                <ul id="itemId" style="color:${tareasList.completado ? 'green' : 'black'}">${tareasList.id}</ul>
                <ul id="itemDesc" style="color:${tareasList.completado ? 'green' : 'black'}">${tareasList.tarea}</ul>
                <ul><button id="itemCheck" onclick="marcar(${tareasList.id})">OK</button></ul>
                <ul><button id="itemBtn" onclick="borrar(${tareasList.id})">X</button></ul>
            </div>
        `
        list.innerHTML=html
    }
    let totales=tareas.length
    tareasTotales.innerHTML=totales
})

btnRealizado.addEventListener("click", () => {
    for (let tareasList of tareas) {
        tareasList.completado = true
    }
    let html=""
    for (let tareasList of tareas) {
        html+=`
            <div class="item">
                <ul id="itemId" style="color:${tareasList.completado ? 'green' : 'black'}">${tareasList.id}</ul>
                <ul id="itemDesc" style="color:${tareasList.completado ? 'green' : 'black'}">${tareasList.tarea}</ul>
                <ul><button id="itemCheck" onclick="marcar(${tareasList.id})">OK</button></ul>
                <ul><button id="itemBtn" onclick="borrar(${tareasList.id})">X</button></ul>
            </div>
        `
        list.innerHTML=html
    }
    let realizadas = tareas.filter(tarea => tarea.completado===true).length;
    tareasRealizadas.innerHTML=realizadas
})
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProyectoService } from 'src/app/Services/proyecto/proyecto.service';
import Proyecto from 'src/model/Proyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent {

  mostrarContenido = false;
  mostrarForm = false;
  idProyecto = 0;
  validacion = false;

  proyectos: Proyecto[] = [];
  constructor(
    private ps: ProyectoService
  ) {}

  proyForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    })


 async ngOnInit(){ 
  this.proyectos = await this.ps.getProyectos();
  console.log("Respuesta proyectos: " + this.proyectos)
  if (localStorage.getItem("active") === "mostrar") {
    this.mostrarContenido = true  
  }
 }

 async eliminarPro(id: number){
  await this.ps.eliminar(id)
  window.location.reload();
 }

 mostrarFormEditar(id: number){
  this.mostrarForm = true;
  this.idProyecto = id;
 }

 ocultarFormEditar(){
  this.mostrarForm = false;
  this.validacion = false;
 }

 onSubmit(id: number){
  const nombre = this.proyForm.value.nombre;
  const descripcion = this.proyForm.value.descripcion;

  if(nombre === "" || descripcion === ""){
    this.validacion = true;
    return;
  }
  this.ps.editar(id, nombre, descripcion)
  window.location.reload();
}


}

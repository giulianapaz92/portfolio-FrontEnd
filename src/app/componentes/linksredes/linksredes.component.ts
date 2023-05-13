import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService }  from '../../Services/usuario/usuario.service';
import { TecnologiaService }  from '../../Services/tecnologia/tecnologia.service';
import { ProyectoService }  from '../../Services/proyecto/proyecto.service';
import { ExperienciaService }  from '../../Services/experiencia/experiencia.service';
import { EducacionService }  from '../../Services/educacion/educacion.service';
import Proyecto from 'src/model/Proyecto';
import Educacion from 'src/model/Educacion';
import Tecnologia from 'src/model/Tecnologia';
import Experiencia from 'src/model/Experiencia';


@Component({
  selector: 'app-linksredes',
  templateUrl: './linksredes.component.html',
  styleUrls: ['./linksredes.component.scss']
})
export class LinksredesComponent {

  @Output()proyectos: Proyecto[]
  @Output()estudios: Educacion[]
  @Output()tecnologias: Tecnologia[]
  @Output()experiencias: Experiencia[]


  constructor(
    private us: UsuarioService, 
    private ts: TecnologiaService,
    private ps: ProyectoService,
    private xs: ExperienciaService,
    private es: EducacionService
    ) {
      this.proyectos = []
      this.estudios = []
      this.tecnologias = []
      this.experiencias = []
    
     }

  element = false;
  visibilityForm(){  
        return (this.element = true);
  }
  hiddenForm(){
    return (this.element = false);
  }

  profileForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    })

  ngOnInit(){ }

  async onSubmit() { 
    const pass = this.profileForm.value.password;
    const email = this.profileForm.value.email;

    const user = await this.us.login(email, pass);  

    if(user){
      console.log("Login ok")
           
     }else{
      // error de login/credenciales
      console.log("usuario o password incorrectos")
      }

    }

}
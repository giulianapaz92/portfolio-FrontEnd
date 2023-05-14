import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogoHeaderComponent } from './componentes/logo-header/logo-header.component';
import { LinksredesComponent } from './componentes/linksredes/linksredes.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercademiComponent } from './componentes/acercademi/acercademi.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { AccesoComponent } from './componentes/acceso/acceso.component';
import { TecnologiasComponent } from './componentes/tecnologias/tecnologias.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProyectoService } from './Services/proyecto/proyecto.service';
import { TecnologiaService } from './Services/tecnologia/tecnologia.service';
import { EducacionService } from './Services/educacion/educacion.service';
import { ExperienciaService } from './Services/experiencia/experiencia.service';
import { UsuarioService } from './Services/usuario/usuario.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoHeaderComponent,
    LinksredesComponent,
    BannerComponent,
    AcercademiComponent,
    ExperienciaComponent,
    SkillsComponent,
    ProyectosComponent,
    AccesoComponent,
    TecnologiasComponent,
    EducacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    ProyectoService,
    TecnologiaService,
    EducacionService,
    ExperienciaService,
    UsuarioService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

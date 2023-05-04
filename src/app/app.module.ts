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
    AccesoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

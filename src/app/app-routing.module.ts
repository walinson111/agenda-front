import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AgendaComponent } from './component/agenda/agenda.component';
import { PerfilComponent } from './component/perfil/perfil.component';
import { StartComponent } from './component/start/start.component';
import { FooterComponent } from './component/footer/footer.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'agenda', component: AgendaComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'start', component: StartComponent},
  { path: 'jogos', component: FooterComponent},
  { path: '', redirectTo: '/start', pathMatch: 'full'},
  { path: '**', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

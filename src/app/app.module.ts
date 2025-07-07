import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './component/header/header.component';
import { FriendComponent } from './component/friend/friend.component';
import { FriendsComponent } from './component/friends/friends.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { AgendaComponent } from './component/agenda/agenda.component';
import { PerfilComponent } from './component/perfil/perfil.component';
import { StartComponent } from './component/start/start.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FriendsComponent,
    NavbarComponent,
    HomeComponent,
    AgendaComponent,
    PerfilComponent,
    StartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule, 
    FriendComponent
  ],
  providers: [
    provideClientHydration(withEventReplay()) 
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

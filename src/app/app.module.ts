import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { HighlightDirective } from './highlight.directive';
import { MenuComponent } from './menu/menu.component';
import { ROUTES } from './app.route';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfileComponent,
    FilmsListComponent,
    HighlightDirective,
    MenuComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { TitleMenuComponent } from './components/title-menu/title-menu.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContentCardComponent } from './components/content-card/content-card.component';
import { PrincipalContentCardComponent } from './components/principal-content-card/principal-content-card.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleMenuComponent,
    MenuComponent,
    ContentCardComponent,
    PrincipalContentCardComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

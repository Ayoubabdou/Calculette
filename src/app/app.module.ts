import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';
import { DonneesService } from './services/donnees.service';
@NgModule({
  declarations: [
    AppComponent,
    CalculatriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DonneesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
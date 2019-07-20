import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { CreateComponent } from './create/create.component';
import { RaceComponent } from './race/race.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    CreateComponent,
    RaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

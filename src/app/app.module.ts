import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from './app.routing';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeService } from './services/home.service';
import { ContactsService } from './services/contacts.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [ HomeService, ContactsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

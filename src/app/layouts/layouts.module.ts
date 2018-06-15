import { NgModule } from '@angular/core';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutsComponent } from './layouts.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    RouterModule
  ],
  providers: [
  ],
  declarations: [
    LayoutsComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    LayoutsComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }


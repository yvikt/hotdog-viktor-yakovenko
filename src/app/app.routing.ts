import { Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
export const AppRoutes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      }, {
        path: '',
        loadChildren: './modules/home/home.module#HomeModule',
      }, {
        path: 'contacts',
        loadChildren: './modules/contacts/contacts.module#ContactsModule',
      }
    ]
  }
];
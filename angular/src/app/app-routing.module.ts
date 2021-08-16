import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home';
import { ProductComponent } from './products';
import { AboutComponent } from './about';
import { ContactComponent } from './contact';


const routes: Routes = [
   { path: '', component: HomeComponent},
   { path: 'products', component: ProductComponent},
   { path: 'about', component: AboutComponent},
   { path: 'contact', component: ContactComponent},

   { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

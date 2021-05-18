import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FofirstComponent } from './fofirst/fofirst.component';
import { BookingComponent } from './booking/booking.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { BookinggComponent } from './bookingg/bookingg.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/conform'},
  {path:'first',component:FofirstComponent},
  {path:'first/:id',component:FofirstComponent},
  {path:'table',component:BookingComponent},
  {path:'personal',component:PersonalinfoComponent},
  {path:'conform',component:ConfirmComponent,
children:[
  
  {path:'first',component:FofirstComponent},
  {path:'first/:id',component:FofirstComponent},
  {path:'table',component:BookingComponent},
]},
  {path:'booking',component:BookinggComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

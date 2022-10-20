import { FrontComponent } from './front/front.component';
import { AddUserComponent } from './add-user/add-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { CandeactivateGuardService } from './candeactivate-guard.service';


const routes: Routes = [
  {path:'Add-User', component:AddUserComponent  },
  // canDeactivate: [CandeactivateGuardService]
  {path: 'List-User', component:ListUserComponent},
  {path: 'Front', component:FrontComponent},
  {path:'',redirectTo: 'Front',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

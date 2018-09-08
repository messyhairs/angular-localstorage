import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskformComponent } from './taskform/taskform.component';
import { TaskComponent } from './task/task.component';
import { TasklistComponent } from './tasklist/tasklist.component';
const routes: Routes = [
{
	path:'',
	component:HomeComponent
},
{
	path:'add',
	component:TaskformComponent
},
{
	path:'view',
	component:TasklistComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

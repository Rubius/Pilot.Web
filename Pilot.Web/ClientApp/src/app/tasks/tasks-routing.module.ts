import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/auth.guard';
import { TasksComponent } from './pages/tasks/tasks.component';
import { TaskComponent } from './pages/task/task.component';

const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
    canActivate: [AuthGuard],
    data: { reuse: true }
  },
  {
    path: ':filterId',
    component: TasksComponent,
    canActivate: [AuthGuard],
    data: { reuse: true }
  },
  {
    path: 'task/:id',
    component: TaskComponent,
    canActivate: [AuthGuard]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class TasksRoutingModule {
}

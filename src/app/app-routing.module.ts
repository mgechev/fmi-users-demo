import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UserListComponent,
  },
  {
    path: 'edit-user/:id',
    loadChildren: () =>
      import('./edit-user/edit-user.module').then((m) => m.EditUserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

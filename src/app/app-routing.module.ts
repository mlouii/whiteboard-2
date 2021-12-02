import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  // {
  //   path: 'message/:id',
  //   loadChildren: () => import('./view-message/view-message.module').then( m => m.ViewMessagePageModule)
  // },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'detail/:assignmentId',
    loadChildren: () => import('./assignment-detail/assignment-detail.module').then( m => m.AssignmentDetailPageModule)
  },
  {
    path: 'focus',
    loadChildren: () => import('./focus/focus.module').then( m => m.FocusPageModule)
  },
  {
    path: 'graded-work',
    loadChildren: () => import('./graded-work/graded-work.module').then( m => m.GradedWorkPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

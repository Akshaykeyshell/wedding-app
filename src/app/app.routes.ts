import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/invite', pathMatch: 'full' },
    { path: 'invite',loadChildren:() => import('./features/invitation/invitation.module').then(m => m.InvitationModule)}
  ];


// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// // Define list of routes
// const routes: Routes = [
//     { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
//     { path: 'main', loadChildren: () => import('./features/main/main.module').then(m => m.MainModule) },
//     { path: '', redirectTo: '/login', pathMatch: 'full' }
//   ];

// // configure root path and specified routes, then exports it for use
// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
//   })

// export class ApproutingModule { }

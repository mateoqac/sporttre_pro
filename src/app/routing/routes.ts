import { Routes } from '@angular/router';
import { SessionManagerService } from '../services/session-manager/session-manager.service';
// import { AuthGuard } from './services/auth/auth.guard';
// import { NoAuthGuard } from 'app/services/auth/no-auth.guard';


export const routes: Routes = [
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full' },

  { path: 'home',
    canActivate: [SessionManagerService],
    loadChildren: '../pages/home/home.module#HomePageModule'},

  { path: 'login',
    // canActivate: [SessionManagerService],
    loadChildren: '../pages/login/login.module#LoginPageModule'},
];


// export const routes: Routes = [
//
//   {
//     path: '',
//     canActivate: [AuthGuard],
//     loadChildren: 'app/hud/hud.module#HUDModule'
//   },
//   {
//     path: 'auth',
//     canActivate: [NoAuthGuard],
//     loadChildren: 'app/routes/auth/auth.module#AuthModule'
//   },
//   // {
//   //   path: 'not-found',
//   //   component: Error404Component
//   // },
//   {
//     // otherwise redirect to 404
//     // path: '**',
//     // redirectTo: 'not-found'
//   }
// ];

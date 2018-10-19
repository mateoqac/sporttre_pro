import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
// import { AuthGuard } from 'app/services/auth/auth.guard';
// import { NoAuthGuard } from 'app/services/auth/no-auth.guard';

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    // AuthGuard,
    // NoAuthGuard
  ]

})
export class RoutingModule {}

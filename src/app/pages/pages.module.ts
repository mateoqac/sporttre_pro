import { NgModule } from '@angular/core';
import { HomePageModule } from './home/home.module';
import { LoginPageModule } from './login/login.module';

@NgModule({
  imports: [
    HomePageModule,
    LoginPageModule
  ],
  exports: [
    HomePageModule,
    LoginPageModule
  ],
  providers: []
})
export class PagesModule {

}

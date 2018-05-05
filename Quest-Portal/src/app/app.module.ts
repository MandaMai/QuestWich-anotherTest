import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CommonService } from './common.service';
import { ResourcesComponent } from './resources/resources.component';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdventurerComponent } from './adventurer/adventurer.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  {path: 'resources', component: ResourcesComponent, data: {title: 'References and Resources'}}
  , {path: 'users', component: UserComponent, data: {title: 'User List of Greatness'}}
  , {path: '', component: LoginComponent}
  , {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ResourcesComponent,
    UserComponent,
    NotFoundComponent,
    AdventurerComponent,
    LandingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // for debugging
    )
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

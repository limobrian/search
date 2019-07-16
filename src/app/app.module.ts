import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfileService } from './profile.service';
import {NgxPaginationModule} from 'ngx-pagination'; 

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { Http, Headers } from '@angular/http';

import { UserDirective } from './user.directive';
import { UserComponent } from './user/user.component';
import {RoutingModule} from './routing/routing.module';
import { TimeCountPipe } from './time-count.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    // LandingPageComponent,
    UserDirective,
    UserComponent,
    TimeCountPipe

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingModule,
    NgxPaginationModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
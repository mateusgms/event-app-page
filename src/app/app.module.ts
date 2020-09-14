import { BlogComponent } from './components/blog/blog.component';
import { EventComponent } from './components/event/event.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { FootBarComponent } from './components/foot-bar/foot-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    LogInComponent,
    EventDetailsComponent,
    BlogDetailsComponent,
    EventComponent,
    BlogComponent,
    FootBarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatCarouselModule.forRoot(),
    MatTabsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    //FootBarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

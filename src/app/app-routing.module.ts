import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { EventComponent } from './components/event/event.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'post/:postId',
    component: BlogDetailsComponent
  },
  {
    path: 'event',
    component: EventComponent
  },
  {
    path: 'event/:eventId',
    component: EventDetailsComponent
  },
  {
    path: 'login',
    component: LogInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

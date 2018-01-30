import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//MODULE
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';

//SERVICE
import { TaskService } from './services/task.service';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavigationComponent } from './components/navigation/navigation.component';

//ROUTING

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'tasks', component: TasksComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }

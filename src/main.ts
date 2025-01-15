import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { TodosComponent } from './app/todos/todos.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './PAGES/contact/contact.component';
import { HomeComponent } from './PAGES/home/home.component';
import { ProjectsComponent } from './PAGES/projects/projects.component';
import { SingleProjectComponent } from './PAGES/single-project/single-project.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'projects/:id', component: SingleProjectComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Import components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

const appRoutes: Routes = [
  {
    path: '',
    component : HomeComponent
  }
  // {
  //   path: 'projects',
  //   component : ProjectsComponent
  // },
  // {
  //   path: 'resume',
  //   component : ResumeComponent
  // },
  // {
  //   path: 'about',
  //   component : AboutComponent
  // },
  // {
  //    path: '**',
  //    component : PageNotFoundComponent
  // }
  // {
  //    path: '**',
  //    component : HomeComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
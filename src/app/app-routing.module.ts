import { ReactiveFormComponent } from './reactive-form/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form/template-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{ path: 'about', component: AboutComponent },
{ path: 'home', component: HomeComponent },
{ path: 'templatefrom', component: TemplateFormComponent },
{ path: 'reactivefrom', component: ReactiveFormComponent },
{ path: '**', component: PageNotFoundComponent },
  // Wildcard route for a 404 page];
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

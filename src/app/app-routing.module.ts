import { PostDataComponent } from './post-data/post-data/post-data.component';
import { GetDataComponent } from './get-data/get-data/get-data.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form/template-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{ path: 'about', component: AboutComponent },
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent,canActivate:[AuthGuard]  },
{ path: 'pagenotfound', component: PageNotFoundComponent,canActivate:[AuthGuard] },
{ path: 'templatefrom', component: TemplateFormComponent },
{ path: 'reactivefrom', component: ReactiveFormComponent },
{ path: 'getdata', component: GetDataComponent },
{ path: 'postdata', component: PostDataComponent },

// { path: '**', component: PageNotFoundComponent },
  // Wildcard route for a 404 page];
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

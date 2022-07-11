import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OnSalePipe } from './on-sale.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TemplateFormComponent } from './template-form/template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GetDataComponent } from './get-data/get-data/get-data.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostDataComponent } from './post-data/post-data/post-data.component';
import { ChaComponent } from './cha/cha.component';
import { ConComponent } from './con/con.component';
import { ChildrenComponent } from './children/children/children.component';
import { ParentComponent } from './parent/parent/parent.component';
import { Interceptor } from './Interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OnSalePipe,
    PageNotFoundComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    GetDataComponent,
    PostDataComponent,
    ChaComponent,
    ConComponent,
    ChildrenComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass : Interceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

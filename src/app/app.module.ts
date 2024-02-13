import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { AboutModule } from './components/about/about.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StyleDirective } from './directives/style.directive';
import { TwoWayDataBindingChildModule } from './components/two-way-binding/two-way-data-binding-child/two-way-data-binding-child.module';
import { TwoWayBindingModule } from './components/two-way-binding/two-way-binding.module';
import { TemplateReferenceComponent } from './components/template-reference/template-reference.component';
import { RxjsModule } from './components/rxjs/rxjs.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DependencyInjectionComponent } from './components/dependency-injection/dependency-injection.component';
import { DependencyInjectionModule } from './components/dependency-injection/dependency-injection.module';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    StyleDirective,
    TemplateReferenceComponent,
    DependencyInjectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutModule,
    CommonModule,
    FormsModule,
    TwoWayBindingModule,
    RxjsModule,
    // HttpClient,
    HttpClientModule,
    DependencyInjectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

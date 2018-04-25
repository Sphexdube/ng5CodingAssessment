import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from '../routing/app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { WorkComponent } from './components/work/work.component';
import { ApproachComponent } from './components/approach/approach.component';
import { SecretComponent } from './components/secret/secret.component';
import { CareersComponent } from './components/careers/careers.component';
import { FooterComponent } from './components/footer/footer.component';

import { OwlModule } from 'ngx-owl-carousel';
import { HttpModule } from '@angular/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    WorkComponent,
    ApproachComponent,
    SecretComponent,
    CareersComponent,
    FooterComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    OwlModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LookupStateService } from './lookup-state-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonService } from './common.service';
import { ProjectTypeService } from './project-type.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    LookupStateService,
    ProjectTypeService,
    CommonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

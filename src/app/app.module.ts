import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LookupStateService } from './lookup-state-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonService } from './common.service';
import { ProjectTypeService } from './project-type.service';
import { ItemComponent } from './item/item.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    LookupStateService,
    ProjectTypeService,
    CommonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

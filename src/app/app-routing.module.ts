import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: ":id",
    component: ItemComponent
  },
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
      )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

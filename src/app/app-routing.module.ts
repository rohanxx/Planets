import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavouritePlanetsComponent } from './favourite-planets/favourite-planets.component';
import { PlanetsComponent } from './planets/planets.component';

const routes: Routes = [
  { path: '', component: PlanetsComponent },
  { path: 'favourite', component: FavouritePlanetsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

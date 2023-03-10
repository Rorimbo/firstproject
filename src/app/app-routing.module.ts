import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
imports: [ RouterModule.forRoot(routes) ],

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
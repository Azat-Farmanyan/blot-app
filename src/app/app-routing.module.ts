import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlotComponent } from './blot/blot.component';
import { CountersComponent } from './counters/counters.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'blot' },
  { path: 'counter', component: CountersComponent },
  { path: 'blot', component: BlotComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

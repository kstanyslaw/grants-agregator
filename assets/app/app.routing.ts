import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GrantsSearchComponent } from './grants-search/grants-search.component';
import { GrantDetailsComponent } from './grant-details/grant-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/grants-search' },
  { path: 'grants-search', component: GrantsSearchComponent },
  { path: 'grant/:id', component: GrantDetailsComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

import { RouterModule, Routes } from '@angular/router';

import { GrantsSearchComponent } from './grants-search/grants-search.component';

const app_routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/grants-search' },
  { path: 'grants-search', component: GrantsSearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes);

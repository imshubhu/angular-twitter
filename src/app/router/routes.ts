import { Routes } from '@angular/router';

import { UserComponent } from '../user/user.component';

export const AppRoutes: Routes = [
  {
    path: 'user/:id',
    component: UserComponent,
    runGuardsAndResolvers: 'always'
  },
  {
    path: '',
    redirectTo: '/user/e3bb574f1fb9ffc34fd6915842dd462a',
    pathMatch: 'full'
  }
];

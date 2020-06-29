import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';
import { PageNotFoundComponent } from './layout/components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'component-basics',
    loadChildren: () =>
      import('./features/01-component-basics/component-basics.module').then((m) => m.ComponentBasicsModule),
  },
  {
    path: 'binding-examples',
    loadChildren: () =>
      import('./features/02-binding-examples/binding-examples.module').then((m) => m.BindingExamplesModule),
  },
  {
    path: 'inputs-outputs-examples',
    loadChildren: () =>
      import('./features/03-inputs-outputs-examples/inputs-outputs-examples.module').then(
        (m) => m.InputsOutputsExamplesModule
      ),
  },
  {
    path: 'todos',
    loadChildren: () => import('./features/04-todos/todos.module').then((m) => m.TodosModule),
  },
  {
    path: 'heroes',
    loadChildren: () => import('./features/08-heroes/heroes.module').then((m) => m.HeroesModule),
  },
  {
    path: 'cities',
    loadChildren: () => import('./features/09-cities/cities.module').then((m) => m.CitiesModule),
  },
  {
    path: 'real-estates',
    loadChildren: () => import('./features/10-real-estates/real-estates.module').then((m) => m.RealEstatesModule),
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

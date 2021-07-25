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

  {
    path: 'forms-tasks',
    loadChildren: () => import('./features/11-forms-tasks/forms-tasks.module').then((m) => m.FormsTasksModule),
  },
  {
    path: 'di-providers-examples',
    loadChildren: () =>
      import('./features/14-di-providers-examples/di-providers-examples.module').then(
        (m) => m.DiProvidersExamplesModule
      ),
  },
  {
    path: 'content-projection',
    loadChildren: () =>
      import('./features/21-content-projection/content-projection.module').then((m) => m.ContentProjectionModule),
  },
  {
    path: 'refs-to-template-elements',
    loadChildren: () =>
      import('./features/22-refs-to-template-elements/refs-to-template-elements.module').then((m) => m.RefsToTemplateElementsModule),
  },

  // TODO
  {
    path: 'rxjs-gui-tasks',
    loadChildren: () => import('./features/39-rxjs-gui-tasks/rxjs-gui-tasks.module').then((m) => m.RxjsGuiTasksModule),
  },
  {
    path: 'rxjs-github-repos',
    loadChildren: () =>
      import('./features/51-rxjs-github-repos/rxjs-github-repos.module').then((m) => m.RxjsGithubReposModule),
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

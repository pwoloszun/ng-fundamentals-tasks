import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';

import { ContentProjectionRoutingModule } from './content-projection-routing.module';
import { ContentProjectionComponent } from './pages/content-projection/content-projection.component';
import { MyLoaderComponent } from './components/my-loader/my-loader.component';
import { SimpleStreamableContainerComponent } from './components/simple-streamable-container/simple-streamable-container.component';
import { BetterStreamableContainerComponent } from './components/better-streamable-container/better-streamable-container.component';
import { ProjectionExampleComponent } from './components/projection-example/projection-example.component';

@NgModule({
  declarations: [
    ContentProjectionComponent,
    MyLoaderComponent,
    SimpleStreamableContainerComponent,
    BetterStreamableContainerComponent,
    ProjectionExampleComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContentProjectionRoutingModule,
  ]
})
export class ContentProjectionModule {
}

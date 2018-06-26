import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import {GEOMETRY_STATES} from './geometry.states';
import {GeometryComponent} from './geometry.component';
import { UIToolkitModule } from '../../@uitoolkit/uitoolkit.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    GeometryComponent
  ],
  imports: [
    CommonModule,
    UIRouterModule.forChild({ states: GEOMETRY_STATES }),
    UIToolkitModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  exports: []
})
export class GeometryModule {}

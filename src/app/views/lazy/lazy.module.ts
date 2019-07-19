import { LazyRoutingModule } from './lazy-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';

@NgModule({
  imports: [CommonModule, LazyRoutingModule],
  declarations: [LazyComponent],
  exports: [LazyComponent]
})
export class LazyModule {}

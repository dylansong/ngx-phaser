import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonkeyRoutingModule } from './monkey-routing.module';
import { MonkeyComponent } from './monkey/monkey.component';
import {PhaserModule} from 'phaser-component-library';

@NgModule({
  declarations: [MonkeyComponent],
  imports: [
    CommonModule,
    MonkeyRoutingModule,
    PhaserModule
  ]
})
export class MonkeyModule { }

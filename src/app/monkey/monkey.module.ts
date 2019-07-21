import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonkeyRoutingModule } from './monkey-routing.module';
import { MonkeyGame } from './monkey.game';
import {PhaserModule} from 'phaser-component-library';

@NgModule({
  declarations: [MonkeyGame],
  imports: [
    CommonModule,
    MonkeyRoutingModule,
    PhaserModule
  ]
})
export class MonkeyModule { }

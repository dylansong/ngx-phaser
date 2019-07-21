import { Component, OnInit } from '@angular/core';
import {GameScene} from './scenes/game.scene';

@Component({
  selector: 'app-monkey',
  template: '<phaser-component (gameReady)="onGameReady($event)" [gameConfig]="gameConfig" [Phaser]="phaser"></phaser-component>',
  styles: ['']
})
export class MonkeyGame {
  public gameConfig : Phaser.Types.Core.GameConfig = {
    width: window.innerWidth,
    height: window.innerHeight,
    title: 'Monkey Game',
    type: Phaser.AUTO,
    physics: {
      default: 'arcade',
      arcade: {
        debug: false
      }
    }
  };
  public phaser = Phaser;
  constructor( private gameScene: GameScene) { }

  onGameReady(game: Phaser.Game) {
    game.scene.add('GameScene', this.gameScene, true);
  }

}

import { Component, OnInit } from '@angular/core';
import {GameScene} from '../scenes/game.scene';

@Component({
  selector: 'app-monkey',
  templateUrl: './monkey.component.html',
  styleUrls: ['./monkey.component.scss']
})
export class MonkeyComponent {
  public gameConfig : Phaser.Types.Core.GameConfig = {
    width: window.innerWidth,
    height: window.innerHeight,
    title: 'Monkey Game',
    type: Phaser.AUTO,
  }
  public phaser = Phaser;
  constructor( private gameScene: GameScene) { }

  onGameReady(game: Phaser.Game) {
    game.scene.add('GameScene', this.gameScene, true);
  }

}

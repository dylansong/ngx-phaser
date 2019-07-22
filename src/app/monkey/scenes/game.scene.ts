import { Injectable } from '@angular/core';
import {BaseArcadeActor} from '../actors/base-arcade-actor';
import {fromEvent} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameScene extends Phaser.Scene {

  helloText: Phaser.GameObjects.Text;
  apple: BaseArcadeActor;
  ground: BaseArcadeActor;
  line: Phaser.GameObjects.Graphics;
  rec: Phaser.GameObjects.Graphics;
  filledRec: Phaser.GameObjects.Graphics;
  constructor() {
    super({ key : 'GameScene'});
  }

  preload(){
    this.load.path = 'assets/physical/';
    this.load.image('apple', 'apple.png');
    this.load.image('ground', 'ground.png');
  }

  create(){

    this.add.text( 200, 200, 'Hello' , { fontFamily: 'Hanalei', fontSize: 128 });

    this.apple =  new BaseArcadeActor({
      scene: this,
      key: 'apple',
      gravity: {x: 0, y: 100},
      x: 100,
      y: 100,
      bounce: {x: 0, y: 0.5},
      velocity: {x: 10, y: 0}
    });

    this.ground = new BaseArcadeActor({scene: this, key: 'ground', x: 100, y: 400, immovable: true});


    this.physics.add.collider( this.apple , this.ground);
    // this.input.on('pointerdown', this.jumpApple.bind(this));
    this.apple.setInteractive();
    // fromEvent(this.apple, 'pointerdown').subscribe(() => console.log('pointer'));
    // this.apple.addListener('pointerdown', () => console.log('hello'));
    this.apple.on('pointerdown' , () => console.log('on event'));

    this.drawLine();
    this.drawRec();
    this.fillRec();
  }

  drawLine(){
    this.line = this.add.graphics();
    this.line.lineStyle(4, 0xff0000);
    this.line.moveTo(100, 100);
    this.line.lineTo(500, 600);
    this.line.strokePath();
  }

  drawRec(){
    this.rec = this.add.graphics();
    this.rec.lineStyle(4, 0xff0000);
    this.rec.strokeRect(100, 200, 300, 100);
  }
  fillRec(){
    this.filledRec = this.add.graphics();
    this.filledRec.fillStyle(0xff0000, 0.5);
    this.filledRec.fillRect(150, 220, 300, 100);
  }
  jumpApple() {
    this.apple.setVelocity( 0, -200);
  }

}

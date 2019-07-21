import { Injectable } from '@angular/core';
import {BaseArcadeActor} from '../actors/base-arcade-actor';

@Injectable({
  providedIn: 'root'
})
export class GameScene extends Phaser.Scene {

  helloText: Phaser.GameObjects.Text;
  apple: BaseArcadeActor;
  ground: BaseArcadeActor;
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
    this.input.on('pointerdown', this.jumpApple.bind(this));
  }

  jumpApple(){
    this.apple.setVelocity( 0, -200);
  }

}

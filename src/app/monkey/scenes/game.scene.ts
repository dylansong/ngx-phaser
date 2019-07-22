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
  meow: Phaser.Sound.BaseSound;

  appleContainer: Phaser.GameObjects.Container;
  constructor() {
    super({ key : 'GameScene'});
  }

  preload(){
    this.load.path = 'assets/';
    this.load.image('apple', 'physical/apple.png');
    this.load.image('ground', 'physical/ground.png');
    this.load.audio('meow', ['sound/meow/meow.mp3' , 'sound/meow/meow.ogg']);
  }

  create(){

    this.add.text(200, 200, 'Please click the apple to play the meow sound!', {fontFamily: 'Droid Serif', fontSize: 28});

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
    this.apple.on('pointerdown' , () => {
      console.log('on event');
      this.meow.play();
    });

    //meow sound
    this.meow = this.sound.add('meow');

    // this.drawLine();
    // this.drawRec();
    // this.fillRec();

    this.initialAppleContainer();
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

  private initialAppleContainer() {
    this.appleContainer = this.add.container(1050, 100);
    for (let i = 1; i <= 20; i++) {
      const xPos = Phaser.Math.Between(0, this.game.config.width as number);
      const yPos = Phaser.Math.Between(0, this.game.config.height as number);
      const apple =  new BaseArcadeActor({
        scene: this,
        key: 'apple',
        gravity: {x: 0, y: 100},
        x: xPos,
        y: yPos,
        bounce: {x: 0, y: 0.5},
        velocity: {x: 10, y: 0}
      });
      this.appleContainer.add(apple);
    }
  }
}

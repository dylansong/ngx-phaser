import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameScene extends Phaser.Scene {

  helloText: Phaser.GameObjects.Text;
  constructor() {
    super({ key : 'GameScene'})
  }

  preload(){

  }

  create(){

    const style = { font: 'bold 32px Arial', fill: '#fff', boundsAlignH: 'center', boundsAlignV: 'middle' };
    this.helloText = this.add.text(100, 100, 'hello', style );
    this.tweens.add({
      targets: this.helloText,
      duration: 2000,
      x: this.helloText.x + 200,
      y: this.helloText.y + 100,
      loop: true,
      yoyo: true,
      repeat: 5,
      onComplete: this.handleTextTweenComplete,
      onRepeat: this.handleTextTweenRepeat.bind(this)});
  }
  private handleTextTweenComplete(tween, targets): void {
    targets[0].x = 0;
  }

  private handleTextTweenRepeat(tween, targets): void {
    this.helloText.x = 500;
  }
}

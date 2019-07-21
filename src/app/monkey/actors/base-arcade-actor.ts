
class ArcadeActorConfig {
  public scene: Phaser.Scene;
  public key: string;
  public x: number;
  public y: number;
  public gravityX?: number;
  public gravityY?: number;
  public immovable?;
}

export class BaseArcadeActor extends Phaser.Physics.Arcade.Sprite {
  constructor(public config: ArcadeActorConfig ) {
      super(config.scene, config.x, config.y, config.key);
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);
      this.initial();
  }
  public initial(): void {
    if (!this.config.immovable) {
      this.setGravityY(this.config.gravityY);
    }
    if (this.config.gravityX) {
      this.setGravityX(this.config.gravityX);
    }
    if (this.config.immovable) {
      this.setImmovable();
    }
  }
}

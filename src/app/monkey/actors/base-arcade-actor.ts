
class ArcadeActorConfig {
  public scene: Phaser.Scene;
  public key: string;
  public x: number;
  public y: number;
  public gravity?: { x: number, y: number };
  public bounce?: { x: number, y: number };
  public velocity?: { x: number, y: number };
  public immovable?: boolean;
}

export class BaseArcadeActor extends Phaser.Physics.Arcade.Sprite {
  constructor(public config: ArcadeActorConfig ) {
      super(config.scene, config.x, config.y, config.key);
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);
      this.initial();
  }
  public initial(): void {
    if (this.config.gravity) {
      this.setGravity(this.config.gravity.x, this.config.gravity.y);
    }
    if (this.config.bounce) {
      this.setBounce(this.config.bounce.x, this.config.bounce.y);
    }
    if (this.config.immovable) {
      this.setImmovable();
    }
    if (this.config.velocity) {
      this.setVelocity(this.config.velocity.x, this.config.velocity.y);
    }
  }
}

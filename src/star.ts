const scale = (num, in_min, in_max, out_min, out_max): number => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

export default class Star {
    x: number;
    y: number;
    z: number;

    sx: number;
    sy: number;

    constructor(depth: number) {
        this.reset();
    }

    reset() {
        this.x = Math.random() * 400;
        this.y = Math.random() * 400;
        this.z = Math.random() * 400;

        this.sx = scale(this.x / this.z, 0, 1, 0, 400);
        this.sy = scale(this.y / this.z, 0, 1, 0, 400);
    }

    move(speed: number): void {
        this.sx = scale(this.x / this.z, 0, 1, 0, 400);
        this.sy = scale(this.y / this.z, 0, 1, 0, 400);
        this.z = this.z - speed;
    }
}
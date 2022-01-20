import Sprite from "openfl/display/Sprite";
import Stage from "openfl/display/Stage";
import Timer from "openfl/utils/Timer";
import TimerEvent from "openfl/events/TimerEvent";


import Star from "./star";

var stars: Array<Star> = [];

for (let i = 0; i < 100; i++) {
	stars.push(new Star(400));
}

class App extends Sprite {
	constructor() {
		super();

		var sprite = new Sprite();
		this.addChild(sprite);

		sprite.graphics.beginFill(0xFFFFFF);
		let timer = new Timer(1000 / 60);
		
		// stars.forEach(star => {
		// 	this.graphics.drawCircle(star.x, star.y, 5 * star.z)
		// });

		stars.forEach(star => {
			sprite.graphics.drawCircle(star.sx, star.sy, 3)
		});

		timer.addEventListener (TimerEvent.TIMER, (e:TimerEvent) => {
			sprite.graphics.clear();
			sprite.graphics.beginFill(0xFFFFFF);

			for (let i = 0; i < stars.length; i++) {
				if (stars[i].sx > 0 && stars[i].sx < 400 && stars[i].sy > 0 && stars[i].sy < 400) {
					stars[i].move(1);
					sprite.graphics.drawCircle(stars[i].sx, stars[i].sy, 400/stars[i].z)
				} else {
					stars[i].reset();
				}
				
			}
		});

		timer.start();
	}
	
	
}


var stage = new Stage(400, 400, 0x151515, App);
document.body.appendChild(stage.element);
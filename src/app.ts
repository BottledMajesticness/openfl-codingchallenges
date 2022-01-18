import Bitmap from "openfl/display/Bitmap";
import BitmapData from "openfl/display/BitmapData";
import Sprite from "openfl/display/Sprite";
import Stage from "openfl/display/Stage";
import Event from "openfl/events/Event";

import getTimer from "openfl/utils/getTimer";

import SimpleVector from "./SimpleVector";

class App extends Sprite {

	constructor() {
		super();
		
		BitmapData.loadFromFile("openfl.png").onComplete((bitmapData) => {
			var bitmap = new Bitmap(bitmapData);
			this.addChild(bitmap);

			let speed = 60 / 1000;
			let cacheTime = getTimer();
			let movement = new SimpleVector(speed, speed * 0.33);

			this.addEventListener(Event.ENTER_FRAME, (e:Event) => {

				let currentTime = getTimer();
				let dt = currentTime - cacheTime;

				App.move(bitmap, movement, dt);

				cacheTime = currentTime;
			});

			let increment = -0.5;
		});	
	}

	static move(bitmap: Bitmap, movement: SimpleVector, dt) {
		bitmap.x += movement.x * dt;
		bitmap.y += movement.y * dt;

		if (bitmap.x > 100) {
			movement.bounceX();
			bitmap.x = 100
		} else if (bitmap.x < 0) {
			movement.bounceX();
			bitmap.x = 0;
		}

		if (bitmap.y > 200) {
			movement.bounceY();
			bitmap.y = 200
		} else if (bitmap.y < 0) {
			movement.bounceY();
			bitmap.y = 0;
		}
	}
}


var stage = new Stage(550, 400, 0x151515, App);
document.body.appendChild(stage.element);
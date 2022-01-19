import Bitmap from "openfl/display/Bitmap";
import BitmapData from "openfl/display/BitmapData";
import Sprite from "openfl/display/Sprite";
import Stage from "openfl/display/Stage";

import MouseEvent from "openfl/events/MouseEvent";
import Event from "openfl/events/Event";

class App extends Sprite {

	constructor() {
		super();

		let offsetX = 0;
		let offsetY = 0;
		let targetX = 0;
		let targetY = 0;
		let dragging = false;

		
		BitmapData.loadFromFile("openfllogo.png").onComplete((bitmapData) => {
			var bitmap = new Bitmap(bitmapData);

			var sprite = new Sprite();
			sprite.addChild(bitmap);
			sprite.buttonMode = true;

			sprite.addEventListener(MouseEvent.MOUSE_DOWN, (e: MouseEvent) => {
				offsetX = sprite.x - e.stageX;
				offsetY = sprite.y - e.stageY;
				dragging = true;
			});

			this.stage.addEventListener(MouseEvent.MOUSE_UP, (e: MouseEvent) => {
				dragging = false;
			});

			this.stage.addEventListener(Event.ENTER_FRAME, (e: Event) => {
				if (dragging) {
					targetX = this.stage.mouseX + offsetX;
					targetY = this.stage.mouseY + offsetY;
				}

				let dx = targetX - sprite.x;
				let dy = targetY - sprite.y;

				if (Math.abs(dx) < 1) {
					sprite.x = targetX;
				} else {
					sprite.x += (dx * 0.2);
				}

				if (Math.abs(dy) < 1) {
					sprite.y = targetY;
				} else {
					sprite.y += (dy * 0.2);
				}
			});

			this.addChild(sprite);
		});	
	}
}


var stage = new Stage(550, 400, 0x151515, App);
document.body.appendChild(stage.element);
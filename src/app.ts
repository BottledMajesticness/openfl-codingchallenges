import Bitmap from "openfl/display/Bitmap";
import BitmapData from "openfl/display/BitmapData";
import Sprite from "openfl/display/Sprite";
import Stage from "openfl/display/Stage";
import Event from "openfl/events/Event";

class App extends Sprite {

	constructor() {
		super();
		
		BitmapData.loadFromFile("openfllogo.png").onComplete((bitmapData) => {
			var bitmap = new Bitmap(bitmapData);
			this.addChild(bitmap);

			let increment = -0.5;
		});	
	}
}


var stage = new Stage(550, 400, 0x151515, App);
document.body.appendChild(stage.element);
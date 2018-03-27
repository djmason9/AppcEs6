
class Application {
  constructor(win) {
		this.window = $.index; //window defined in index.xml
	}

	open() {
		this.window.open();
  }

	add(view){
		this.window.add(view);
	}
}

class AnimalView {
    constructor(name, sound, type, imgSrc) {
        this.name = name;
        this.type = type;
        this.sound = sound;

				var playSound = () => {
					console.log(this.sound);
				}

				this.view = Titanium.UI.createView({
					layout : "vertical",
					height : "50%"
				});

				var imageView = Ti.UI.createImageView({
				  image: imgSrc,
					height : "80%"
				});

				imageView.addEventListener("click", () => {playSound()});

				this.view.add(imageView);
    }
}

class BirdView extends AnimalView {
    constructor(name, color, type, hobby){
        super(name, "tweet", type, "/images/bird.jpg");
        this.color = color;
				this.hobby = hobby;

				this.label = Ti.UI.createLabel({
					text : `${this.name} the ${this.type} is ${this.color} \nenjoys ${this.hobby} and goes: ${this.sound}`
				});

				this.view.add(this.label);
    }
}

class FrogView extends AnimalView {
    constructor(name, color, type, hobby){
        super(name, "ribbit", type, "/images/frog.jpg");
        this.color = color;
				this.hobby = hobby;

				this.label = Ti.UI.createLabel({
					text : `${this.name} the ${this.type} is ${this.color} \nenjoys ${this.hobby} and goes: ${this.sound}`
				});

				this.view.add(this.label);
    }
}

//open view
let app = new Application();
app.add(new FrogView("Kermit", "green", "frog", "tennis"));
app.add(new BirdView("Steve", "yellow", "bird", "hiking"));
app.open();

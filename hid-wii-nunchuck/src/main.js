/*
import HID from 'HID';
import Pins from 'pins';
let gamepad = new HID.Gamepad();
let keyboard = new HID.Keyboard();

application.behavior = Behavior({
	onLaunch: function(application) {
		// Configure the BLL used by this application
	    Pins.configure({
			wiiremote: {
				require: "nunchuck",
        		pins: {
         			nunchuck: {  sda: 27, clock: 29 }
        		}
      		}
    	}, success => {
    		Pins.repeat('/wiiremote/read', 33, result => {
		        gamepad.sendPosition({x: (result.x - 127 ) * 320, y: (result.y - 125) * 320});
		        gamepad.pressButtons([result.c,result.z]);
		        if(result.z === 0) keyboard.sendKey('x');
		        if(result.c === 0) keyboard.sendKey('a');
      		});
		});
  	}
});
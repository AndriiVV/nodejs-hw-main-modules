const EventEmitter = require("events");

// const emitter = new EventEmitter();

// emitter.on("something", (data) => {
// 	console.log("ON: something", data);
// });

// emitter.emit("something", { a: 1 });
// emitter.emit("something", { b: 2 });

// setTimeout(() => {
// 	emitter.emit("something", { c: 3 });
// }, 1500);

class Dispatcher extends EventEmitter {
	subscribe(eventName, cb) {
		console.log("[Subscribe...]");
		this.on(eventName, cb);
	}
	dispatch(eventName, data) {
		console.log("[Dispatching...]");
		this.emit(eventName, data);
	}
}

const disp = new Dispatcher();

disp.subscribe("event X", (data) => {
	console.log("ON: event X", data);
});

disp.dispatch("event X", { data: "ABCD" });

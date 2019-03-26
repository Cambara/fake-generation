let mathService = require("./services/MathService")();
let fakeBirthdateService = require("./services/FakeBirthdateService")(mathService);
let fakeBodyMeasurementService = require("./services/FakeBodyMeasurementService")(mathService);
let fakeNameService = require("./services/FakeNameService")(mathService);
let fakeUserService = require("./services/FakeUserService")(fakeNameService, fakeBodyMeasurementService, fakeBirthdateService, mathService);
let fakeUserController = require("./controllers/FakeUserController")(fakeUserService);


module.exports = fakeUserController;
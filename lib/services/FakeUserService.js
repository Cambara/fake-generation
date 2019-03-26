class FakeUserService
{
    constructor(fakeNameService, fakeBodyMeasurementService, fakeBirthdateService, mathService)
    {
        this.fakeNameService = fakeNameService;
        this.mathService = mathService;
        this.fakeBodyMeasurementService = fakeBodyMeasurementService;
        this.fakeBirthdateService = fakeBirthdateService;
    }

    createUser()
    {
        let sex = this.mathService.getRandomNumber(0, 2) == 0 ? "male" : "female";
        let name = this.fakeNameService.createFakeName(sex);
        let body = this.fakeBodyMeasurementService.createBodyMeasurement();
        let birthdate = this.fakeBirthdateService.createBirthdate();
        return {
            name,
            sex,
            body,
            birthdate
        }
    }
}

module.exports = (fakeNameService, fakeBodyMeasurementService, fakeBirthdateService, mathService) => new FakeUserService(fakeNameService, fakeBodyMeasurementService, fakeBirthdateService, mathService);
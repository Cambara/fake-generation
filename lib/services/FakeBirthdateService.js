class FakeBirthdateService
{
    constructor(mathService)
    {
        this.mathService = mathService;
    }

    createBirthdate()
    {
        let age = this.mathService.getRandomNumber(18, 51);
        let days = this.mathService.getRandomNumber(0, 365);
        let date = new Date();
        date.setUTCFullYear(date.getUTCFullYear() - age);
        date.setUTCMonth(0);
        date.setUTCDate(1);
        date.setUTCHours(0,0,0,0);
        date.setUTCDate(date.getUTCDate() + days);
        return date;
    }
}

module.exports = (mathService) => new FakeBirthdateService(mathService);
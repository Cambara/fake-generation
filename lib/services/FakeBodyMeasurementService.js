class FakeBodyMeasurementService
{
    constructor(mathService)
    {
        this.mathService = mathService;
    }

    createBodyMeasurement(height)
    {
        height = height == undefined ? this.mathService.getRandomNumber(150, 211)/100 : height;
        let weight = this.mathService.getRandomNumber(40, 121);
        let imc = weight / (height * height);

        if(imc < 18 || imc > 42)
        {
            return this.createBodyMeasurement(height);
        }
        imc = imc.toFixed(2);
        return {
            height: parseInt( height * 100 ),
            weight,
            imc: parseFloat(imc) 
        };
    }
}

module.exports = (mathService) => new FakeBodyMeasurementService(mathService);
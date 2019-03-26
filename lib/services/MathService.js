class MathService
{
    getRandomNumber(min, max)
    {
        let x = Math.random() * (max - min) + min;
        return Math.floor(x);
    }
}

module.exports = () => new MathService();
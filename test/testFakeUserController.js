const expect = require("chai").expect;
const fakeUser = require("../lib/index");


describe('#fakeUser', () => {
    let result = fakeUser.createFakeUser();
    it('should covert a name is a string', () => {
        expect(result.name).to.be.string;
    });
    it('should covert a sex is a string', () => {
        expect(result.sex).to.be.string;
    });

    it('should covert a birthdate is a date', () => {
        expect(result.birthdate).to.be.a('date');
    });

    it('should covert a body is a object', () => {
        expect(result.body).to.be.a('object');
    });

    it('should covert a body height is a number', () => {
        expect(result.body.height).to.be.a('number');
    });

    it('should covert a body weight is a number', () => {
        expect(result.body.weight).to.be.a('number');
    });

    it('should covert a body imc is a number', () => {
        expect(result.body.weight).to.be.a('number');
    });
});
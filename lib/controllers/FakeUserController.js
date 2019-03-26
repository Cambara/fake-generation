class FakeUserController
{
    constructor(fakeUserService)
    {
        this.fakeUserService = fakeUserService;
    }

    createFakeUser()
    {
        return this.fakeUserService.createUser();
    }
}

module.exports = (fakeUserService) => new FakeUserController(fakeUserService);
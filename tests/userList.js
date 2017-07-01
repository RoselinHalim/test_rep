
describe("usersService test", function () {
  var userService, httpBackend;

  beforeEach(module('webService'));

  beforeEach(inject(function (usersService, $httpBackend) {
    userService = usersService;
    httpBackend = $httpBackend;
  }));

  it("expect get userList service Done", function () {
    httpBackend.whenGET("https://api.github.com/users").respond(
      [{
        data:'name'
      }]
    );
    userService.getAllUsers().then(function(respond) {
      expect(respond.data).toEqual([{
        data:'name'
      }]);
    });
    httpBackend.flush();
  });

});
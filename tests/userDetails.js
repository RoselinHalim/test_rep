describe("userDetailsService test", function () {
  var userService, httpBackend;

  beforeEach(module('webService'));

  beforeEach(inject(function (usersService, $httpBackend) {
    userService = usersService;
    httpBackend = $httpBackend;
  }));

  it("expect get userDetails service Done", function () {
    httpBackend.whenGET("https://api.github.com/users/5").respond({
      data:'user'
    });
    userService.getUsrById("5").then(function(respond) {
      expect(respond.data).toEqual({data:'user'});
    });
    httpBackend.flush();
  });

});
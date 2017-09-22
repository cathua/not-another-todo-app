var should    = require("chai").should(),
    expect    = require("chai").expect,
    supertest = require("supertest"),
    api       = supertest("http://localhost:3000");

describe("GET /destination", function(done){
  var candies;

  before(function(done) {
    api.get('/')
    .set("Accept", "application/json")
    .end(function(error, response){
      destination = response.body;
      done();
    })
  })

  it("should return a 200 response", function(done){
    api.get('/')
    .set("Accept", "application/json")
    .expect(200, done)
  });

  it("should return an array", function(done){
    api.get("/")
    .set("Accept", "application/json")
    .end(function(error, response){
      expect(response.body).to.be.an('array');
      done()
    })
  });

  it("should return all the records in the database", function(done){
    api.get("/")
    .set("Accept", "application/json")
    .end(function(error, response){
    expect(response.body.length).to.equal(destination.length)
    done()
    })
  });
})

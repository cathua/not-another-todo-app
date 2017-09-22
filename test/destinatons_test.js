var should    = require("chai").should(),
    expect    = require("chai").expect,
    supertest = require("supertest"),
    api       = supertest("http://localhost:3000");

let id;
let length;

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
      length = destination.length;
      expect(response.body.length).to.equal(destination.length);
      done();
    })
  });
})

describe('POST /destinations', function(done){
  before(function(done) {
    api.post('/destinations')
    .set('Accept', 'application/json')
    .send({
      'location': 'Barcelona'
    })
    .end((err, res) => {
      id = res.body.id;
      done();
    });
  });
  it('should return a 200 response', function(done) {
    api.get('/destinations/' + id)
    .set('accept', 'applications/json')
    .expect(200, done);
  })
  it('should add a location to the database', function(done) {
    api.get('/')
    .set('accept', 'applications/json')
    .end(function(error, response) {
      expect(response.body.length).to.equal(length+1);
      done();
    })
  })
})

describe('GET /destinations/:id', function(done){
  it('should return a 200 response', function(done) {
    api.get('/destinations/' + id)
    .set('accept', 'applications/json')
    .expect(200, done);
  })

  it('should return an object containing the field \'location\'', function(done) {
    api.get('/destinations/' + id)
    .set('accept', 'applications/json')
    .end(function(error, response) {
      expect(response.body.destinations).to.have.property('location')
      done();
    })
  })
})

describe('PUT /destinations/:id', function(done) {
  it('should return a 200 resopnse', function(done) {
    api.get('/destinations/' + id)
    .set('accept', 'applications/json')
    .expect(200, done);
  })
  it('should update value to \'Reykjavik\'', function(done) {
    api.put('/destinations/' + id)
      .set('accept', 'application/json')
      .send({
        "location": "Reykjavik"
      })
      .end(function(error, response) {
        expect(response.body.location).to.equal('Reykjavik');
        done();
    });
  })
})

describe('DELETE /destinations/:id', function(done){
  it('should delete a destination', function (done) {
    api.delete('/destinations/' + id)
    .set('accept', 'applications/json')
    .end(function(error, response) {
      expect(response.body.message).to.equal('deleted');
      done();
    });
  });
})

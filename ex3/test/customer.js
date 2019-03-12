//import models from './models';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe('Customers', () => {
 /*
  * Test the /GET route
  */
  describe('/GET customer', () => {
	  it('it should GET all the customers', (done) => {
			chai.request('http://localhost:3000')
		    .get('/customers')
		    .end((err, res) => {
			  	res.should.have.status(200);
			  	res.body.should.be.a('array');
			  	res.body.length.should.be.not.eql(0);
		      done();
		    });
	    });
    });
 /*
  * Test the /GET/:id route
  */
  describe('/GET/:customer_id customer', () => {
	  it('it should GET a customer by the given id', (done) => {
            let customer = {
                    id: '1',
                    name: 'Ryan',
                };

            chai.request('http://localhost:3000')
            .get('/customers/' + customer.id)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('name');
                res.body.should.have.property('id').eql(customer.id);
                done();
            });
        });
    });
});
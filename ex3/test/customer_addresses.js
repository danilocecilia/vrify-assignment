let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe('Customers Addresses', () => {
 /*
  * Test the /GET route
  */
  describe('/GET customer addresses', () => {
	  it('it should GET all the customer addresses', (done) => {
			chai.request('http://localhost:3000')
		    .get('/customer-addresses')
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
	  it('it should GET a customer addresses by the given customer id', (done) => {
            let customer = {
                    id: '1',
                    name: 'Ryan',
                };

            chai.request('http://localhost:3000')
            .get('/customer-addresses/' + customer.id)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('streetAddress');
                res.body.should.have.property('postalCode');
                res.body.should.have.property('country');
                res.body.should.have.property('customerId').eql(customer.id);
                done();
            });
        });
    });
});
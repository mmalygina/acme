const expect = require('chai').expect;
const acme = require('../src/acme');
const sinon = require('sinon');

describe('tests for acme function', () => {
    it('acme function exists', () => {
        expect(acme).to.be.ok;
    });
    // it('acme returns object', () => {
    //     expect(acme([], []).constructor.toString().slice(9, 14)).to.equal('Object');
    // });
    it('accumulates correctly', () => {
        const salesData = [
            {
                customerID: 1,
                orderId: 1,
                total: 2
            },
            {
                customerID: 2,
                orderId: 1,
                total: 3
            },
            {
                customerID: 1,
                orderId: 2,
                total: 5
            },
            {
                customerID: 1,
                orderId: 3,
                total: 1
            },
            {
                customerID: 2,
                orderId: 2,
                total: 2
            }
        ];
        const customerData = [
            {
                id: 1,
                name: 'moe'
            },
            {
                id: 2,
                name: 'betty'
            }
        ];
        expect(acme(salesData, customerData)).to.eql({'moe': 8, 'betty': 5});
    })
});

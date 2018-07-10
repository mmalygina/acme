const expect = require('chai').expect;
const acme = require('../src/acme');
const sinon = require('sinon');

describe('tests for acme function', () => {
    it('acme function exists', () => {
        expect(acme).to.be.ok;
    });
    it('acme returns object', () => {
        expect(acme([], []).constructor.toString().slice(9, 15)).to.equal('Object');
    });
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
    it('accumulates correctly with names missing from sales data, but present in customers data', () => {
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
                customerID: 3,
                orderId: 1,
                total: 6
            },
            {
                customerID: 3,
                orderId: 2,
                total: 4
            },            {
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
            },
            {
                id: 3,
                name: 'joe'
            },
            {
                id: 4,
                name: 'andy'
            }
        ];
        expect(acme(salesData, customerData)).to.eql({'moe': 8, 'betty': 5, 'joe': 10, 'andy': 0});
    })
});

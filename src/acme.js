const acme = (sales, customers) => {
    console.log('SalesData: ', sales);
    console.log('CustomersData', customers);
    let temp = {};
    let obj = {};
    sales.reduce((acc, e) => {
        if(Object.keys(temp).includes(e.customerID.toString())){
            temp[e.customerID] += e.total;

        } else {
            temp[e.customerID] = e.total;
        }
    }, 0);
    customers.reduce((acc, c) => {
        if(Object.keys(temp).includes((c.id).toString())){
            obj[c.name] = temp[c.id];
        }
        else {
            obj[c.name] = 0;
        }
    }, 0);
    console.log('resulting object ', obj);
    return obj;
};


module.exports = acme;

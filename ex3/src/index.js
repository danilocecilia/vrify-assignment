import express from 'express';
import models from './models';

const app = express();

app.use((req, res, next) => {
    req.context = {
      models
    };
    next();
  });

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/customers', (req, res) => {
    return res.send(Object.values(req.context.models.customers));
});

app.get('/customers/:customerId', (req, res) => {
    return res.send(req.context.models.customers[req.params.customerId]);
});

app.get('/customer-addresses', (req, res) => {
    return res.send(Object.values(req.context.models.customer_addresses));
});

app.get('/customer-addresses/:customerId', (req, res) => {
    return res.send(req.context.models.customer_addresses.find(val => val.customerId === req.params.customerId));
});

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);

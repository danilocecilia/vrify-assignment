let customers = {
    1: {
      id: '1',
      name: 'Ryan',
    },
    2: {
      id: '2',
      name: 'Jonathan',
    },
    3: {
        id: '3',
        name: 'Colin'
    },
    4: {
        id: '4',
        name: 'Syed'
    }
  };
  
  let customer_addresses = [
    {
        id: '1',
        customerId: '2',
        streetAddress: '123 Big Walk Way',
        postalCode: '75023',
        country: 'US'
    },
    {
        id: '2',
        customerId: '3',
        streetAddress: '509 Charter Road',
        postalCode: '90021',
        country: 'US'
    },
    {
        id: '3',
        customerId: '1',
        streetAddress: '999 Night Stalker Road',
        postalCode: '12345',
        country: 'US'
      },
  ];

  export default {
      customers,
      customer_addresses
  }
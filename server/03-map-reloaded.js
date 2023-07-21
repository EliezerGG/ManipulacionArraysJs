const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ]

  console.log('Original',orders);
  const rta = orders.map(item =>{
    return item.total
  });

  console.log('rta', rta);

//   const respuesta2 = orders.map(item =>{
//     item.customerName = "Sara";
//     return item
//   });

//   console.log('Original',orders);

//   console.log('Respuesta2', respuesta2);

  const respuesta3 = orders.map(item =>{
    return {
        ...item,
        item: .19,

    };
  });

  console.log('Original',orders);

  console.log('Respuesta2', respuesta3);

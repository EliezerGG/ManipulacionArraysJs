const items = [1,2,3,4,5,5,5,1,2,3,4,0];

const rta = items.reduce((obj, item)=>{
    if (!obj[item]) {
        obj[item] = 1;
    }else{
        obj[item] = obj[item] +1;
    }
    return obj;
},{});

console.log('rta',rta);

const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

  const rta1 = data
  .map(item => item.level)
  .reduce((obj, item)=>{
    if (!obj[item]) {
        obj[item] = 1;
    }else{
        obj[item] = obj[item] +1;
    }
    return obj;
},{});

console.log('rta1',rta1);
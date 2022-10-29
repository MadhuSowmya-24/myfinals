function conversion(obj) {
    let a = [];
    a = Object.entries(obj);
    return a;
  };
  
  
  console.log(conversion({ a: 1, b: 2 }));
  console.log(conversion({  tesla: 12, tats: 112 }));

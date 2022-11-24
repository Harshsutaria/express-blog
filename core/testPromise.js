function hola() {
  let p1 = new Promise((resolve, reject) => {
    //implementing set timeout
    setTimeout(() => {
      resolve("chey");
    }, 2000);
  });

  let p2 = new Promise((resolve, reject) => {
    //implementing set timeout
    setTimeout(() => {
      resolve("bayey");
    }, 2000);
  });

  let p3 = new Promise((resolve, reject) => {
    //implementing set timeout
    setTimeout(() => {
      resolve("hehe");
    }, 7000);
  });


  let p5 =  new Promise((resolve , reject)=>{
    setTimeout(()=>{
      console.log("HURRAY NOT WANT")
    },5000)
  })

  let p4 =  new Promise((resolve , reject)=>{
    setTimeout(()=>{
      console.log("HURRAY NOT WANT")
    })
  })

  return [p1, p2, p3];
}

async function main() {
  console.log("STARTING BRRRHHHHH", new Date().toISOString());
  //   let result = await Promise.all(hola());

  //   it returns the first fulfilled promise
  //   let result = await Promise.any(hola());
  let result = await Promise.race(hola());

  console.log("RESUL IS REULT", result, new Date().toISOString());
}

/**
 * 

Promise.race and Promise.any do different things:

Promise.race is settled as soon as any of the promises you feed it settle, whether they are fulfilled or rejected.

Promise.any is settled as soon as any of the promises you feed it is fulfilled or they are all rejected, in which case it's rejected with an AggregateError.

The chief differences are:

race's promise is rejected when the first promise you give it is rejected; any's promise isn't, because another promise may be fulfilled instead.

any's promise's rejection reason will be an AggregateError, but race's rejection reason will be the rejection reason from the first promise that was rejected.
 */

main();

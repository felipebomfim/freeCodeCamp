/*

Map the Debris

Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

*/


function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    let period;
    let res = []; 
    for (let i=0; i<arr.length; i++){
      period = 2*Math.PI*Math.sqrt(Math.pow((arr[i]['avgAlt']+earthRadius),3)/GM);
      period = Math.round(period);
      res.push({name:arr[i]['name'], orbitalPeriod: period});
    }
    return res;
  }

  
console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));

let variable = [1,2,3,4,5,6];
console.log(variable.length);
console.log(variable[0]);
console.log(variable[(variable.length -1)]);

let mixeddatatypes = ["hello", 42, true, null, {name : "john"}, [1,2,3]];
console.log(mixeddatatypes.length);

let itcompanies = ['Facebook',
     'Google', 
     'Microsoft', 
     'Apple',
     'IBM', 
     'Oracle', 
     'Amazon'
    ];
let LastElement = itcompanies.pop();
console.log(LastElement);
let result = itcompanies.join(" , ");
console.log( typeof (result +  " and "  + LastElement));
console.log(itcompanies.length);
console.log(itcompanies[0]);
console.log(itcompanies[itcompanies.length -1]);
console.log( itcompanies[Math.floor((itcompanies.length - 1)/ 2)]);
console.log(itcompanies)

for(i = 0; i < itcompanies.length; i++){
    console.log[(itcompanies[i].toUpperCase)];
}


console.log(itcompanies.sort());
console.log(itcompanies.reverse());
console.log(itcompanies.slice(0, 3));
console.log(itcompanies.slice(3, 6));
console.log(itcompanies[(itcompanies.length )/ 2] ) ;





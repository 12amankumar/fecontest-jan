/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap(x) {
  //Write your code here
  let aman=arr.map(PrintDeveloperswithMap);
  console.log(aman);
  return x.profession(user1,user2);
 
}

function PrintDeveloperbyForEach(value) {
  //Write your code here
  arr.forEach(PrintDeveloperbyForEach);
  console.log(value);
}

function addData() {
  //Write your code here
  let user1= [{id: 1, name: "john", age: "18", profession: "developer" }];
  let user2=  [{ id: 2, name: "jack", age: "20", profession: "developer" }];
  let user3= [{ id: 3, name: "karen", age: "19", profession: "admin" }];
let user4=[];
user4.unshift({id:4,name:"susan",age:"20",profession:"intern"});
console.log(user4);
}

function removeAdmin() {
  //Write your code here
  let user1= [{id: 1, name: "john", age: "18", profession: "developer" }];
  let user2=  [{ id: 2, name: "jack", age: "20", profession: "developer" }];
  let user3= [{ id: 3, name: "karen", age: "19", profession: "admin" }];
  user3.pop();
  console.log(user3);
}

function concatenateArray() {
  //Write your code here
  let aman = [
    { id: 5, name: "rohan", age: "18", profession: "admin" },
    { id: 6, name: "mohan", age: "24", profession: "developer" },
    { id: 7, name: "raj", age: "22", profession: "admin" },
  ];
  let ayushsir=arr.concat(aman);
  console.log(ayushsir);
}

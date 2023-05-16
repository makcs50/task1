/*function getName(obj) {
    return obj;
  }

const person = { 
firsname: "Ahmad",
lastname: "Ahmadov",
}

console.log(getName(person));
//

*/
/*function correctName(obj, lastname){
    return `${obj.firstname} ${lastname}`;
}


const personn = {
    firstname: 'Alvi',
    age: 27,
  };
  console.log(correctName(personn, 'Tsugaev')); 
  // в консоле должно быть 'Alvi Tsugaev'
*/

function correctName(obj){
    if(obj.fathername === undefined){
        return obj.firstname
    }
    else{
       return `${obj.firstname} ${obj.lastname} ${obj.fathername}`
    }
}


const firstPerson = {
    firstname: 'Alvi',
    lastname: 'Tsugaev',
    fathername: undefined
  };
  
  console.log(correctName(firstPerson)); 
  // в консоле должно быть 'Alvi'


  const secondPerson = {
    firstname: 'Akhmad',
    lastname: 'Kuduzow',
    fathername: 'Yakubovich'
  };
  
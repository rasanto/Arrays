//let num_imp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
//for (let i = 0; i <= num_imp.length; i++) {
    
 // document.write(num_imp[i])
  //i++
    
//}

//let numero2 = [];
//let numero = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
//numero.forEach(function (dos){
 //numero2.push(dos * 5);
 
//});
//(numero2)

//document.write(numero2)



let ran = [];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) - min)
}

for (let i = 0; i <= 20; i++) {
  ran.push(getRandomInt(1, 100))
}
document.write('Numeros desordenados ' + ran + '<br>')
let ran2 = [];
ran.sort(function (a,b){
  if (a == b) {
    return 0;
  }if (a < b) {
   return -1;
  }
  return 1;
})

ran.forEach(function (po) {
  ran2.push(po)
})

document.write('Numeros ordenados ' + ran2)
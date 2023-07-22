for (let i = 0; i <= 100; i++) {
   if (i%3===0 && i%5===0) {
       console.log(i,'Fizz Buzz');
    } else if(i%5===0) {
        console.log(i,'Buzz');
    }else if(i%3===0){
       console.log(i,"Fizz");
   }
    
}


const array = ['a', 'bb', 'ccc']; 
const rta = array.map(item => item.length);

console.log(rta);
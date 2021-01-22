//========================First assignment code:============================

function kilometerToMeter(distances){
    const meter = distances * 1000;
    if(distances>0){  
    }
    else{
      return " Hey, distance cannot be negative."
    }
    return  meter;
}
const meter= kilometerToMeter(2.5);
console.log(meter);


//=========================Second assignment code:==============================


function budgetCalculator(clock , phone , laptop){
    const  clockPrice  = 50;
    const  phonePrice  = 100;
    const  laptopPrice = 500;
      totalPrice= clockPrice * clock + phonePrice * phone + laptopPrice * laptop ;
     if((clock)>=0 && (phone)>=0 && (laptop)>=0) {
        return totalPrice;
     }
     else{
         return " Negative value not exists."
     }
}
 totalPrice= budgetCalculator(0, 2 , 2);
 console.log(totalPrice);


//=========================== Third assignment code:============================


function hotelCost(days){
    if(days<=10 && days>0 ){
     totalCost= 100 * days;
     return totalCost;

    }
    else if(days<=20 && days>10){
       totalCost= 1000 + 80 * (days-10);   /* first 10days cost 1000 */
       return totalCost;
    }
    else if(days>=21){
       totalCost= 1000 +  800 + 50 * (days-20); /*  first 10 days cost 1000
        & 11th-20th days cost 800*/
       return totalCost;
    }
    else{
        return "Day can't be negative and zero."
    }
}
totalCost = hotelCost(5);
console.log( totalCost);



// =============================Forth assignment code============================


function megaFriend(array){
    var length=0;
    var longest="";
     for(var i=0;i<array.length;i++){
      
       if(array[i].length>length){
        var largestName=array[i]; 
         length=array[i].length;
       }
      else if(array[i].length==[]){
          return largestName='Please input some data.'
      }
     }
     return largestName;
  }
 
 largestName=megaFriend(['Nazmul' , 'Hasan' , 'Nadim', 'Md Nazmul Hasan' , 'ayman']);
 console.log(largestName);

  
 



  
  




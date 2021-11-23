
function receivesAFunction(cb){
   console.log(cb());
}

function returnsANamedFunction () {
    return returnsANamedFunction;
} 
returnsANamedFunction();

 function returnsAnAnonymousFunction(){
    return  returnsAnAnonymousFunction => console.log("this is an anonymous function");
 }
  returnsAnAnonymousFunction();
  
  /*const returnsAnAnonymousFunction = function (){
    return  returnsAnAnonymousFunction;
  };
  returnsAnAnonymousFunction ();*/
  
  
 
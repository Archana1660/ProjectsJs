# ProjectsJs

Factorial using recursion
function fact(n){
	if(n <= 1){
  return 1;
  }
if(n == 2){
  return 2;
  }
return n*fact(n-1)
  
}

console.log( fact(4) );


//4*fact(3)
	//4*3*fact(2)
  	//4*3*2

// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//a is a string, b is an array

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
for(var i = 0;i<a.length;i++){
  a[i] = a[i]*2;
}

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];

//case 1
for(var i = 0;i<a.length;i++){
  document.write(a[i]+ ' ');
}

//case 2
for(var i = 0;i<a.length;i++){
  document.write(a[i]+ '+');
}

//case 3
for(var i = 0;i<a.length;i++){
  document.write(a[i]+ ',');
}

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
for(var i = 0;i<a.length;i++){
     for(var j = i+1;j<a.length;j++){
     		if(a[i]<a[j]){
        	tmp = a[i];
          a[i] = a[j];
          a[j] = tmp; 
        }
     }
  }
  document.write("["+a+"]");


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: [10,8,5,4,1]
  var b = [],c=[];
  t = a.length;
  for(x = 0;x<t;x++){
  	Temp = a.pop();
    console.log(Temp);
    if(x==0||(b).indexOf(Temp)==-1){
    	b.push(Temp);
      c.push(1);
      //console.log(b)
    }
    else{
    	c[b.indexOf(Temp)]++;
    }
  }
  for(x=0;x<c.length;x++){
  	if(x==0)
    	T = c[x];
    if(T<c[x])
      T = c[x];
  }
  document.write(b[c.indexOf(T)]);



//soal 1 
/*function calculateMean(Arr){
	var l=Arr.length;
	var x=0;
	for(i=0; i>=Arr.length; i++){
		x=+Arr[i]
 		
	}return x / l;
}
var A=[1,2,3,4,5,6];
console.log(calculateMean(A)); */


//soal2
/*function calculateMedian(arr){
var w= arr.length;
var x=0;
var y=0;

	if( w%2!==0){
		return arr[((w-1)/2)];
	}else{
		return (arr[(w/2)-1]+arr[(w/2)])/2;
	}
}
var a=[1,2,3,4,8]
console.log(calculateMedian(a));*/

/*
untuk mengurutkan angka yang terkecil dari 
function bubbleSort(array) {
 var next2last = array.length - 1;
 array.some(function() {
   var isNotSwapped = true;
   for (var i = 0; i < next2last; i += 1) {
     var nextIndex = i + 1;
     if (array[i] > array[nextIndex]) {
       var holder = array[nextIndex];
       array[nextIndex] = array[i];
       array[i] = holder;
       isNotSwapped = false;
     }
   }
   return isNotSwapped;
 });
}
var numbers = [12, 10, 15, 11, 14, 13, 16];
bubbleSort(numbers);
console.log(numbers);
*/

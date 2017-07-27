function createPyramid(column, rows)
{
for(var i=0;i<rows;i++) {
var output="";
    for(var j=0;j<rows-i;j++) {
        output+=" ";
    }
    for(var k=0;k<=i;k++) {    
       output += "* ";
    }
    console.log(output);  
}  
}

console.log(createPyramid(5,5));


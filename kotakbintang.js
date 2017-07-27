function createPyramid(column, rows) {
    for(var i=0;i<rows;i++) {
    var output="";
    	for (var j=0; j<column; j++) {
    		output += "* ";
    	}
        console.log(output);  
    }  
}

console.log(createPyramid(5,5));


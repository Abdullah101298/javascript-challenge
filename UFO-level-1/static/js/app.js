// from data.js
var tableData = data;

// YOUR CODE HERE!

// Selecting html data from the tbody in index.html 
var tbody = d3.select("tbody");

// Iterating through the data.js script index

function tableinsert() { 

tableData.forEach(function(dataiterate) { 
   
    console.log(dataiterate);

    // Using d3 to append the tr element in tbody in the index.html. 
    var row = tbody.append('tr');


    Object.entries(dataiterate).forEach(function([key, value]) {console.log(key, value);
    
    // Appending the td in the html to the values from the data.js
    var cell = row.append("td");
    cell.text(value);
    });
    })

}

var button = d3.select("#filter-btn");

button.on("click", searchfilter);

function searchfilter() { 

    var inputelement = d3.select("#datetime");

    var inputvalues = inputelement.property("value");

    var filteredData = tableData.filter(tableData => tableData.datetime === inputvalues);

    filteredData.forEach(function(dataiteratefilter) { 
    
        // Using d3 to append the tr element in tbody in the index.html. 
        var rowfilter = tbody.append('tr');
    
        Object.entries(dataiteratefilter).forEach(function([keys, values]) {console.log(keys, values);
        
        // Appending the td in the html to the values from the data.js
        var cellfilter = rowfilter.append("td");
        cellfilter.text(values);
        });
        })
       
}

tableinsert()








    



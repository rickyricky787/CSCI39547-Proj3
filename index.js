

var numRows = 0;
var numCols = 0;
var colorSelected; //undefined by default;

// Functions


//Adds a row
function addR() {
    // console.log("IM in addR");
    let output = document.getElementById("output"); //get the output to append to it
    if(numRows === 0){ //create a new row with a new column
        let newRow = document.createElement("tr"); //create a column
        let newCol = document.createElement("td");
        //need to add onclick functionality
        newCol.onclick = function (){
            this.style.backgroundColor = colorSelected;
            };
        newRow.appendChild(newCol);
        output.appendChild(newRow);
        numRows++;
        numCols++;
        // console.log("the number of rows is: ", numRows, "and cols is: ", numCols);
    }else{ //traverse through the number of rows
        // let allRows = document.querySelectorAll("tr");
        let newRow = document.createElement("tr"); //create a column

        for(let i = 0; i<numCols; i++){
            // console.log("Rorw: ", allRows[i]);
            let newCol = document.createElement("td");
            newCol.onclick = function (){
            this.style.backgroundColor = colorSelected;
            };
            newRow.appendChild(newCol);
            console.log("done");
        }
        output.appendChild(newRow);
        numRows++;
        // console.log("the number of rows is: ", numRows, "and cols", numCols);
    }
}
//Adds a column
function addC() {
    // console.log("IM in addC");
    let output = document.getElementById("output"); //get the output to append to it
    if(numRows === 0){ //create a new row with a new column
        let newCol = document.createElement("td"); //create a column
        let newRow = document.createElement("tr");
        newCol.onclick = function (){
            this.style.backgroundColor = colorSelected;
            };
        newRow.appendChild(newCol);
        output.appendChild(newRow);
        numRows++;
        numCols++;
        // console.log("the number of coloms is: ", numCols, "and rows: ", numRows);
    }else{ //traverse through the number of rows
        let allRows = document.getElementsByTagName("tr");
        for(let i = 0; i<numRows; i++){
            // console.log("Rorw: ", allRows[i]);
            let newCol = document.createElement("td"); //create a column
            newCol.onclick = function (){
            this.style.backgroundColor = colorSelected;
            };
            allRows[i].appendChild(newCol);
        }
        numCols++;
        // console.log("the number of coloms is: ", numCols, "num of rows: ", numRows);

    }
}

//Removes a row
function removeR() {
    let output = document.getElementById("output")
    if((numCols === 0) || (numRows===0)){
        alert("There is nothing to delete bruh!!!");
    }
    else{
        let output = document.getElementById("output");
        let lastRow = output.lastElementChild;
        output.removeChild(lastRow);
        numRows--;
        if(numRows===0) numCols = 0;
    }
    console.log("the number of coloms is: ", numCols, "num of rows: ", numRows);
}
//Remove a column
function removeC() {
    let output = document.getElementById("output")
    if((numCols === 0) || (numRows===0)){
        alert("There is nothing to delete bruh!!!");
    }
    else{
        // let output = document.getElementById("output");
        let allRows = document.getElementsByTagName("tr");
        for(let i = 0; i<numRows; i++){
            // console.log("Rorw: ", allRows[i]);
            let rCol = allRows[i].lastElementChild; //create a column
            allRows[i].removeChild(rCol);
        }
        numCols--;
        if(numCols===0) numRows = 0;
    }
    console.log("the number of coloms is: ", numCols, "num of rows: ", numRows);
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
}

function fill(){
    var table = document.getElementById("output");
    for (var i = 0, row; row = table.rows[i]; i++) {
        for (var j = 0, col; col = row.cells[j]; j++) {
                col.style.backgroundColor=colorSelected;
        }
    }
}
function clearAll(){
    var table = document.getElementById("output");
    for (var i = 0, row; row = table.rows[i]; i++) {
        for (var j = 0, col; col = row.cells[j]; j++) {
                col.style.backgroundColor="";
        }
    }
}

function fillU(){
    var table = document.getElementById("output");
    for (var i = 0, row; row = table.rows[i]; i++) {
        for (var j = 0, col; col = row.cells[j]; j++) {
            if(col.style.backgroundColor===""){
                col.style.backgroundColor=colorSelected;
            }
        }
    }
}

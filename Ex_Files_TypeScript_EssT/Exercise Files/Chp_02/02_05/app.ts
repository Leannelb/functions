var array = [
    "Pick up drycleaning", 
    "Clean Batcave", 
    "Save Gotham"
];

for (var value of array) {
    console.log(value);
}

// for of works quicker & better than
/*
* for ( var index in array )
* then you need to access each item via the idex:
* var value = array[index];
*
 */
//javascript
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function(event) {
    //pointers to object
    const firstTextBox = document.getElementById("input1")
    const secondTextBox = document.getElementById("input2")
    //get value of object
    var first = firstTextBox.value;
    var second = secondTextBox.value;

//jQuery
var third = $('#input3').val();

console.log("First: ", first);
console.log("Second: ", second);
console.log("Third: ", third);

alert(first + "\n" + second + "\n" + third);

//Stop form from firing
event.preventDefault();
});

$('#clear').click(function() {
    $('#input1').val("");
    $('#input2').val("");
    $('#input3').val("");

    return false;
})
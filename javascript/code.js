function calcAgeInDays() {
    "use strict";
    let age = document.getElementById("age").value,
        result = age * 365;
    document.getElementById("Output").innerHTML = result;
    
    if (age === "") {
        alert("Enter a Correct Value")
    } else if (age.typeOf() == String) {
        alert("Output").innerHTML = "This Field Is Not accepted letters";
    } else {
        document.getElementById("Output").innerHTML = result;
    }
}

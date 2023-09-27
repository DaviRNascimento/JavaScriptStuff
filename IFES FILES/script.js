
function checkTriangle(side1, side2, side3) {
    // parsing to number
    let a = parseInt(side1), b = parseInt(side2), c = parseInt(side3);
    
    if( a < (b + c) && b < (a + c) && c < (b + a)) {
        console.log(typeof(a));
        document.getElementById("possible").innerHTML = "Yes, It does";

        // Check which type of triangle it is
        if (a == b && a == c && b == c) {
            document.getElementById('triangleType').innerHTML = "Equilateral";
        }
        else if (a == b || b == c || a == c) {
            document.getElementById('triangleType').innerHTML = "Isosceles";
        }
        else {
            document.getElementById('triangleType').innerHTML = "Scalene";
        }
    }
    else {
        document.getElementById("possible").innerHTML = "No, It does not";
    }
}   
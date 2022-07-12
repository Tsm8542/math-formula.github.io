function get_matrix_values(){
    var a11 = document.getElementById("ia11").value;
    var a12 = document.getElementById("ia12").value;
    var a13 = document.getElementById("ia13").value;
    var a21 = document.getElementById("ia21").value;
    var a22 = document.getElementById("ia22").value;
    var a23 = document.getElementById("ia23").value;
    var a31 = document.getElementById("ia31").value;
    var a32 = document.getElementById("ia32").value;
    var a33 = document.getElementById("ia33").value;
    var a = (a11)*((a22*a33)-(a23*a32))-(a12)*((a21*a33)-(a23*a31))+(a13)*((a21*a32)-(a22*a31))
    document.getElementById("a11").innerText=a11
    document.getElementById("a12").innerText=a12
    document.getElementById("a13").innerText=a13
    document.getElementById("a21").innerText=a21
    document.getElementById("a22").innerText=a22
    document.getElementById("a23").innerText=a23
    document.getElementById("a31").innerText=a31
    document.getElementById("a32").innerText=a32
    document.getElementById("a33").innerText=a33
    document.getElementById("x").innerText="The value of matrix is: "+a;
}

window.onload=()=>{
    get_matrix_values()
}

window.oninput=()=>{
    get_matrix_values()
}
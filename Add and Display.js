//khai bao mang
let arr = [];
let x = 0;

function AddElementToArray() {
    //lay gia tri tai input
    arr[x] = document.getElementById('txtValue').value
    //thong bao da them gia tri vao mang;
    alert("Da them gia tri thu " + x + " = " + arr[x]+ " vao mang");
    //tang x va xoa gia tri tai input;
    x++;
    document.getElementById('txtValue').value = "";
}
function DisplayArray(){
    //
    let e= "<hr/>";
    for (i=0;i<arr.length;i++){
        e += "Element " + i + " = " +arr[i] + "<br/>";
    }
    document.getElementById('result').innerHTML = e;
}
let x=0;
let arr=Array();
function add_element_to_array() {
    arr[x]=document.getElementById("txtValue").value;
    alert("Element: "+arr+" Added at index"+x);
    x++;
    document.getElementById("txtValue").value="";
    document.getElementById("result").innerHTML="";
}
function dis_play() {
    let e="<hr/>";
    for (let i=0;i<arr.length;i++){
        e+="Element"+i+" = "+arr[i]+"<br/>"
    }
    document.getElementById("result").innerHTML=e;
    arr=new Array();
    x=0;

}


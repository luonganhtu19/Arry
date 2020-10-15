let x=0;
let arr=Array();
function add_element_to_array() {
    arr[x]=document.getElementById("txtValue").value;
    arr[x]=document.getElementById("input").value;
    //alert("Element: "+arr+" Added at index"+x);
    x++;
    document.getElementById("txtValue").value="";
    document.getElementById("result").innerHTML="";
    document.getElementById("out").innerHTML=arr;
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
function rev() {
    let first=0;
    let last=arr.length-1;

    while (first<last){
        let b=arr[first];
        arr[first]=arr[last];
        arr[last]=b;
        first++;
        last--;
    }
    document.getElementById("arrRs").innerText="Result reverse"+ arr;
}


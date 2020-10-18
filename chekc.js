let x = 0;
let arr = Array();
let arr1=Array();
let arr4=Array();
function add_element_to_array() {
    arr[x] = document.getElementById("txtValue").value;
    arr[x] = document.getElementById("input").value;
    arr1[x] = document.getElementById("input3").value;
    arr4[x]=document.getElementById("input4").value;
    //alert("Element: "+arr+" Added at index"+x);
    x++;
    document.getElementById("txtValue").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("out").innerHTML = arr;
    //unit3
    document.getElementById("out3").innerHTML ="Arry: "+ arr1;
    document.getElementById("input3").value = "";
    // Unit 4
    document.getElementById("out4").innerHTML="Arry: " +arr4;
    document.getElementById("input4").value="";

}

function dis_play() {
    let e = "<hr/>";
    for (let i = 0; i < arr.length; i++) {
        e += "Element" + i + " = " + arr[i] + "<br/>"
    }
    document.getElementById("result").innerHTML = e;
    arr = new Array();
    x = 0;

}

function rev() {
    let first = 0;
    let last = arr.length - 1;

    while (first < last) {
        let b = arr[first];
        arr[first] = arr[last];
        arr[last] = b;
        first++;
        last--;
    }
    document.getElementById("arrRs").innerText = "Result reverse" + arr;
}


function search() {
    let se = document.getElementById("sreach").value;
    document.getElementById("sreach").value="";
    //alert(arr);
    for (let i = 0; i < arr1.length; i++) {
        //alert(typeof arr[0]+": "+ typeof se)
        //alert(se == arr[0]);
        if (se == arr1[i]) {
            // document.getElementById("arrSreach3").innerHTML = "Value " + arr1[i] + " found at " + i;
            alert("1");
            break;
        }
    }
    alert("0");
    //alert(arr)
}

function max1() {
    let max=0;
    let b=0;
   for (let i=0;i<arr4.length;i++){
       b=+arr4[i]
       if(b>max){
           max=b;
       }
   }
   document.getElementById("arrMax").innerHTML= "Result: Max of arry: "+max;
}
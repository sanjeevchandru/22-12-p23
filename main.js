document.write("23.JS, difference between two arrays"+"<br>");
document.write("two array's are[1, 2, 3], [100, 2, 1, 10] "+"<br>")
function test23(arr1,arr2){
    arr1=arr1.toString().split(",");
    arr2=arr2.toString().split(",");
    var x=[];
    for(let i=0;i<arr1.length;i++){
        if(arr2.indexOf(arr1[i])==-1){
                x.push(arr1[i]);
        }
    }
    for(let i=0;i<arr2.length;i++){
        if(arr1.indexOf(arr2[i])==-1){
            x.push(arr2[i]);
        }
    }
    return x;
}
document.write(test23([1, 2, 3], [100, 2, 1, 10])+"<br>");
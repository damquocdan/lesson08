// // // // // console.log("xin chào cách nhúng thứ 2")
// // // // // function hello() {
// // // // //     alert("hello click")
// // // // // }
// // // // // var a = 200;
// // // // // if (a == 0) {
// // // // //     alert("a bằng 0");
// // // // // } else if (a > 0) {
// // // // //     alert("a lớn hơn 0");
// // // // //     if (a > 100) {
// // // // //         alert("a lớn hơn 100");
// // // // //     }
// // // // // } else {
// // // // //     alert("a nhỏ hơn 0")
// // // // // }
// // // // // var thang = 13;
// // // // // switch (thang) {
// // // // //     case 1:
// // // // //         console.log("tháng 1");
// // // // //         break;
// // // // //     case 2:
// // // // //         console.log("tháng 2");
// // // // //         break;
// // // // //     case 3:
// // // // //         console.log("tháng 3");
// // // // //         break;
// // // // //     case 4:
// // // // //         console.log("tháng 4");
// // // // //         break;
// // // // //     case 5:
// // // // //         console.log("tháng 5");
// // // // //         break;
// // // // //     case 6:
// // // // //         console.log("tháng 6");
// // // // //         break;
// // // // //     case 7:
// // // // //         console.log("tháng 7");
// // // // //         break;
// // // // //     case 8:
// // // // //         console.log("tháng 8");
// // // // //         break;
// // // // //     case 9:
// // // // //         console.log("tháng 9");
// // // // //         break;
// // // // //     case 10:
// // // // //         console.log("tháng 10");
// // // // //         break;
// // // // //     case 11:
// // // // //         console.log("tháng 11");
// // // // //         break;
// // // // //     case 12:
// // // // //         console.log("tháng 12");
// // // // //         break;
// // // // //     default:
// // // // //         console.log("không có tháng này ");
// // // // //         break;

// // // // // }
// // // // for(var i =0; i<100;i+=2){
// // // //     console.log(i);
// // // // }
// // // // var i =0;
// // // // do{
// // // //     i+=2;
// // // //     console.log(i);
// // // // }while(i<100)
// // // var i=0;
// // // while(i<100){
// // //     i+=3;
// // //     console.log(i);
// // // }
// // var arr = ['js','html','css'];
// // // debugger
// // console.log("for");
// // for(let i =0;i<arr.length;i++){
// //     console.log(arr[i]);
// // }
// // console.log("for in");
// // for (const item in arr){
// //     console.log(item);
// // }
// // console.log("for o")
// // for( const string of arr ){
// //     console.log(item);
// // }
// // khởi tạo mảng 
// // // lưu trữ các phần tử 
// // var array1 = []
// // var array = new Array(1,2,3,4);
// // console.log(array[2]);
// // console.log(arrat1)
// var arr = ['ts','js','html','css'];
// var arr2 = ['anguler', 'php', 'donet']
// // // arr.valueOf();
// // //thêm phần từ vào trong mảng
// arr.push("c#")
// // //xóa một phần tử cuối cùng trong mảng
// // arr.pop();
// // //xóa phần tử đầu tiên của mảng
// // arr.shift();
// // arr.sort();
// // var data = arr.concat(arr2);
// // var newArr = [...arr,... arr2]// cách 2
// arr.slice(1,3)
// console.log(newArr);
function twoSum(a,b){
     return a+b;
}
function twoSumV2(a,b){
    return a+b;
}

var so1 = 5;
var so2 = 10;

console.log(twoSum(so1,so2))
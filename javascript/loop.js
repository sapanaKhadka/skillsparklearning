
// // // //for loop //condition known x vane for loop use garne
// // // for(let i=1;i<=10;i++){
// // // console.log(i);
// // // }
// // // //while loop
// // // let j=1;
// // // while(j<=10){
// // //     console.log(j);
// // //     j++;
// // // }
// // // // DO while loop
// // // let k=1;
// // // do{
// // //     console.log(k);
// // //     k++;
// // // }
// // // while(k<=10);
// // // // 1.
// // // let l=2;
// // // while(l<=10){
// // //     console.log(l);
// // //     l++;
// // // }
// // //using a while loop , print even number from 2 to 10
// // let i=1
// // for(let i=1;i<=10;i++)
// //     if(i%2==0){
// //         console.log(i);
// //     }
// //     //write a for loop to calculate sum of numbers from 1 to 10
// //     let sum=0;
// //     for(let i=1;i<=10;i++){
// //         sum=sum+i;
// //         console.log(sum);
// //     }
// // //     //Using a while loop,to find the factorial of given number.
// //     let fact=1;
// //     for(i=1;i<5;i++)
// //         fact=fact*i;
// //     {
// //         console.log(fact);
// //     }
// //     //**Q: Write a for loop that prints the square of numbers from 1 to 5.**
    
// //     for (let i = 1; i<= 5; i++) {
// //         console.log(i * i);
// //       }
// //       //**Q: Using a while loop, print the cube of numbers from 1 to 5.
// //       let num = 1;
// // while (num<= 5) {
// //   console.log(num * num * num);
// // num++;
// // }
// // //**Q: Write a for loop to iterate through an array of names and print each name in the console.**
// // const names = ["Alice", "Bob", "Charlie", "David"];
// // for (let i = 0; i<names.length; i++) {
// //   console.log(names[i]);
// // }
// // //**Q: Using a while loop, find the sum of elements in an array of numbers.**
// // const numbers = [10, 20, 30, 40, 50];
// // let sum = 0;
// // let index = 0;
// // while (index <numbers.length) {
// //   sum += numbers[index];
// //   index++;
// // }
// // console.log("Sum:", sum);
// // //**Q: Write a for loop that prints the elements of an array in reverse order.**
// // const fruits = ["apple", "banana", "orange", "kiwi"];
// // for (let i = fruits.length - 1; i>= 0; i--) {
// //   console.log(fruits[i]);
// // }
// //**Q: Using a while loop, find the largest number in an array of numbers.**
// // const numbers = [25, 10, 45, 30, 15];
// // let largest = numbers[0];
// // let index = 1;
// // while (index <numbers.length) {
// //   if (numbers[index] > largest) {
// //     largest = numbers[index];
// //   }
// //   index++;
// // }
// // console.log("Largest Number:", largest);
// // //**Q: Write a for loop to print the multiplication table of a given number (e.g., 5) up to 10.**
// // let num=6;
// // for (let i = 1; i<= 10; i++) {
// //   console.log(num + " x " + i + " = " + num * i);
// // }
// //**Q: Using a while loop, find the largest element in an array of numbers.**
// // const numbers = [12, 43, 7, 25, 39];
// // let largest = numbers[0];
// // let index = 1;
// // while (index <numbers.length) {
// //   if (numbers[index] > largest) {
// //     largest = numbers[index];
// //   }
// //   index++;
// // }
// // console.log("Largest Number:", largest);
// // //**Q: Write a for loop to print the following pattern:**
// // for (let i = 1; i<= 5; i++) {
// //     let row = '';
// //     for (let j = 1; j <= i; j++) {
// //       row += i;
// //     }
// //     console.log(row);
// //   }
// // //**Q: Using a while loop, find the number of digits in a given number (e.g., 1234).**
// // let number = 1234;
// // let count = 0;
// // while (number !== 0) {
// //   number = Math.floor(number / 10);
// //   count++;
// // }
// // console.log("Number of digits:", count);
// // //**Q: Write a for loop to calculate the sum of all odd numbers from 1 to 50.**
// // let sum = 0;
// // for (let i = 1; i<= 50; i += 2) {
// //   sum += i;
// // }
// // console.log("Sum of odd numbers:", sum);
// // //**Q: Using a while loop, print the numbers from 1 to 100, but skip the multiples of 5.**
// // let num = 1;
// // while (num<= 100) {
// //   if (num % 5 !== 0) {
// //     console.log(num);
// //   }
// // num++;
// // }
// // //**Q: Write a for loop to print the reverse of a given string (e.g., "hello").**
// // const str = "hello";
// // let reversedStr = "";
// // for (let i = str.length - 1; i>= 0; i--) {
// // reversedStr += str[i];
// // }
// // console.log("Reversed string:", reversedStr);
// // **Q: Using a while loop, find the factorial of a given number (e.g., 7).**
// // let num = 7;
// // let factorial = 1;
// // while (num> 0) {
// //   factorial *= num;
// // num--;
// // }
// // console.log("Factorial:", factorial);
// // //**Q: Write a for loop to print the following pattern:**

// // for (let i = 1; i<= 5; i++) {
// //   let row = '';
// //   for (let j = 1; j <= i; j++) {
// //     row += j;
// //   }
// //   console.log(row);
// // }
// //Right angle tringle
// // let i;
// // let j;
// // for(i=1;i<=6;i++){
// //     let star="";
// //     for(let j=1;j<=i;j++)
// //     {
// // star+="*"
// //     }
// //     console.log(star);

// //}
// //**Q: Using a while loop, find the sum of all elements in a multidimensional array of numbers.**
// // const numbers = [[1, 2], [3, 4], [5, 6]];
// // let sum = 0;
// // let i = 0;
// // while (i<numbers.length) {
// //   let j = 0;
// //   while (j < numbers[i].length) {
// //     sum += numbers[i][j];
// // j++;
// //   }
// // i++;
// // }
// // console.log("Sum:", sum);
// //2.	Solid Rectangle:
// // let n = 5; 
// // let string = "";

// // for(let i = 0; i < 5; i++) { // external loop
// //   for(let j = 0; j < 7; j++) { // internal loop
// //     string += "*";
// //   }
// //   string += "\n";
// // }
// //console.log(string);
// //3.	Inverted Triangle:
// // let n = 5;
// // let string = "";
// // for (let i = 0; i < n; i++) {
// //   // printing star
// //   for (let k = 0; k < n - i; k++) {
// //     string += "*";
// //   }
// //   string += "\n";
// // }
// // console.log(string);
// //4.	Pyramid:
// let n = 5;
// let string = "";
// External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);
// //5.	Inverted Pyramid:
// // let n = 5;
// // let string = "";
// // // External loop
// // for (let i = 0; i < n; i++) {
// //   // printing spaces
// //   for (let j = 0; j < i; j++) {
// //     string += " ";
// //   }
// //   // printing star
// //   for (let k = 0; k < 2 * (n-i) - 1; k++) {
// //     string += "*";
// //   }
// //   string += "\n";
// // }
// // console.log(string);
// //6.	Hollow Rectangle:










      



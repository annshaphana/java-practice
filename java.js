// //--------- 01 ---------//
// // let outputFor ='';
// // let outputWhile ='';

// // for (let i = 0; i < 5; i++) {
// //     outputFor += i + ' ';
    
// // }

// // let j = 0;
// // while (j<5) {
// //     outputWhile += j + ' ';
// //     j++;
    
// // }
// // console.log(outputFor);
// // console.log(outputWhile);

// //--------------02 -----------//

// // let i = 0;
// // let output = '';

// // do {
// //     output += i +' ';
// //     i++;
// // } while (i<5); 
// //     console.log(output);
    

//let i=5;


// for (let a = 0; a < 10; a++) {
//     console.log(a);
    
// }
 for (let i = 1; i<=5 ; i++){
    let line =" ";
    for (let b = 1; b <=i; b++) {
       line += i + " ";
        
    }
    console.log(line);
 }

//  let i= 1;
//  let row=5;

//  while (i<=row) {
//     let  b=1;
//     let line=" ";
//     while (b<=i) {
//         line+= i + " ";
//         b++;
        
//     }

//     console.log(line);
//     i++;
//  }
let i=1;
let n=5;

// for (let i = 1; i <= n; i++) {
//        let spaces = " ".repeat(n - i);
//        let stars = "⭐".repeat(1 * i - 1);
//        console.log(spaces + stars);
// }

for (let i = 1; i <= n; i++){
    let line = " "
    
            for (let b = 1; b <=i; b++) {
               line += i + " ";
                
            }
            console.log(line);
        }
    
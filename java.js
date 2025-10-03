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
//  for (let i = 1; i<=5 ; i++){
//     let line =" ";
//     for (let b = 1; b <=i; b++) {
//        line += i + " ";
        
//     }
//     console.log(line);
//  }

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
// let i=1;
// let n=5;

// for (let i = 1; i <= n; i++) {
//        let spaces = " ".repeat(n - i);
//        let stars = "⭐".repeat(1 * i - 1);
//        console.log(spaces + stars);
// }

// for (let i = 1; i <= n; i++){
//     let line = " "
    
//             for (let b = 1; b <=i; b++) {
//                line += i + " ";
                
//             }
//             console.log(line);
//         }
// for (i=0; i<5; i++);{
//    for (let j = 0; j <=i; j++) {
      
//    }
//    console.log("*");
      
//}

// let text = "";

// for (let i = 1; i <= 5; i++) {
//   if (i === 3) { continue}
//     for (let j = 1; j <= i; j++) {
//       text += "*";
//     }
    
// }

// console.log(text);

// ------------ While ---------//

// for (let i = 1; i <= 5; i++) {
//    if (i===3) continue
//    let num=' ';
//    for (let j = 1; j <= i; j++) {
//       num += i;
      
//    }
//    console.log(num);
// }

// for (let i = 1; i <= 5; i++) {
 
//    let num=' ';
//    for (let j = 1; j <= i; j++) {
//       if (i===3) continue
//       num += i;
      
//    }
//    console.log(num);
// }
// for (let i = 5; i >= 1 ; i--) {
//    let line = " " ;
//    for (let j = 1; j <= i ; j++) {
//       line += i;

//    }
//    console.log(line);
// }
// let i =1;
// while (i<10) {
//    console.log(i);
//    i++;
// }

// let i = 5;
// while (i>0) {
//    console.log(i);
//    i--;
// }
// let t=1;

// while (t<=6) {
//  console.log("⭐");
//  t++;
// }

// let t=6;
// while (t>0) {
//    console.log("*".repeat(t));
//    t--;
// }

// function main() {
//    let i = 0;
//    while (i<5) {
//       console.log(i + " ");
//       i++;
//    }
//    main()
// }
// let i=1;
// while (i<=5) {
//    let star=" ";
//    let j=1;
//    while (j<=i) {
//       star += "*";
//       j++;
//    }
//    console.log(star);
//    i++
// }

let i = 5;
do {
   let star=" ";
   let j=1

   do {
      star += "*";
      j++;
   } while (j<=i);
   console.log(star);
   i--;
} while (i>=1);
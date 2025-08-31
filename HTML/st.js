// console.log("Hello World");
// let num = 45
// num = 56
// console.log(num);
// const alpha = "Balajee Kr."
// console.log(alpha)


// const Profile = {
//     user_name: "shradhakhapra",
//     name: "Shradha khapra",

// }
// console.log(Profile)/


// let num = prompt("Enter a number: ");
// let yes;

// if (num % 5 === 0) {
//    console.log(" is a multiple of 5 : ",num);
// }
// else {
//     yes = `is not a multiple of 5 :  ${num}`
// }
// console.log(yes);

// let score = prompt("Enter your marks you get(Out of 100): ");
// let score1;
// if (score > 100 )
// {
//     score1 = "Just Shut Up! @#$%";
// }
// else if (score >= 90 && score <)
// {
//     score1 = "Congratulations! you Get GRADE 'A'";
// }
// else if (score >= 75)
// {
//     score1 = "Excellent! you Get GRADE 'B'";
// }
// else if (score >= 60)
// {
//     score1 = "very Good! you Get GRADE 'C'";
// }
// else if (score >= 50)
// {
//     score1 = "Good! you Get GRADE 'D'";
// }
// else
// {
//     score1 = "Congratulations! you Are 'FAIL'";
//     5354+89+3
//     2.01232513
// }
// console.log(score1)
// let sum = 0
// for (let i = 1; i <=5; i++ )
// {
//     sum = sum + i   
// }
// console.log(sum);

// print all even No. between 0 to 100

for (let i = 2; i <= 4; i = i + 2) {
    //     if (i % 2 === 0)
    //     {
    // console.log(i);
    //     }

}


// asking user to correct game number until

// let m = Math.floor(Math.random()*100);

// let n = prompt("Enter Correct Game number(1 to 100): ")
// while(n!=m)
// {
//     n = prompt("You Guess Incorrect number, Enter Correct Guess number(1 to 100): ")
//     if (n>m)
//     {
//         console.log("Guess Number is Greater than Actual Number ");

//     }
//     else
//     {
//         console.log("Guess Number is less Than Actual Number");

//     }
// }
// console.log(`Guess Number is ${n} and actual number is ${m}`);

// PRACTISE QUESTION

// let size = 0;
// let str = prompt("Enter Your Full Name: ")
// for (i of str)
//     {
//         size++;
//     } 
// let str1 = "@" + str +size
// console.log(str1);

// PRACTICE QUESTION

// let sum = 0;
// let marks = [85,97,44,37,76,60]
// // marks.length()

// for (let i =0; i<marks.length; i++)
// {
//     sum = sum+marks[i];
// }
// let average = sum / marks.length
// console.log(average);



// let sum = 0
// let price = [250,645,300,900,50]
// let j = 0
// let newarray = []
// for ( i of price)
// {
//     sum = (i - (i * 0.1));
//     // console.log(i);
//     newarray[j] = sum
//     j = j +1



// }
// console.log(newarray);

let company = ["Bloomberg", "Microsoft", "Uber", "Google", "JBM", "netflix"]

// company.shift()
// console.log(company);

// company.splice(2,1,"Ola")
// console.log(company);

// company.push("Amazon");
// console.log(company)
// const  H1 = document.querySelector('h1');
// const btn = document.querySelector('button');

// btn.addEventListener('click', function change () {
//     console.log("hello");
//     H1.style.backgroundColor = 'green'
//     H1.innerText = 'balaji'
// }

// PRACTICE QUESTION

// let str = prompt("Enter any word or sentence: ")
// let Hi = str.toString()
// let sum = 0;
// function stringcall(a) {
//     for (i of a) {
//         if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
//             sum = sum + 1


//         }

//     }
// }
// stringcall(Hi)
// console.log(`The Vowels in ${str}  is ${sum}`);

// let myfun = (a, b) => {
//     console.log(a ** b);

// }
// myfun(2, 5)

// let str1 = prompt("Enter any word or sentence: ")
// let Hi1 = str1.toString()
// let sum2 = 0;
// let stringcall1 = (a) => {
//     for (i of a) {
//         if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
//             sum2 = sum2 + 1


//         }

//     }
// }
// stringcall1(Hi1)
// console.log(`The Vowels in ${str1}  is ${sum2}`);

// let arr1 = [12, 14, 45, 65, 43, 21, 23];
// let me3 = arr1.forEach((i) => {
//     return i;
// }
// )
// console.log(me3)

// let arr3 = [12, 14, 45, 65, 43, 21, 23];
// let me4 = arr3.map((i) => {
//     return i;
// }
// )
// console.log(me4)

// let arr3 = [12, 14, 45, 65, 43, 21, 23];
// let me4 = arr3.filter((i) => {
//     return i % 2 === 0;
// }
// )
// console.log(me4)

// let arr3 = [12, 14, 45, 65, 43, 21, 23];

// let result1 = arr3.reduce((pre, curent) => {
//     return (pre + curent)
// }
// )
// console.log(result1 / arr3.length);

// PRACTICE QUESTION

// let arr5 = [65, 65, 87, 93, 95, 98.87, 98.65, 43, 89.9, 90, 87, 98];
// arr5.forEach((element, i, a) => {

// let num = arr5.length - 1;
// if (i === num) {
//     console.log(element);
//     return;

// }
// console.log(num);


// console.log(`element: ${element} and index: ${i} and array: ${a}`);

//     arr5[i] = i * 10



// })

// let koml = document.querySelector("h1");
// h1.append("NAMASTE")
// console.log(Koml)
// koml.innerText = koml.innerText + " Namaste"
// console.log(Koml);

// let box = document.querySelectorAll(".box");
// console.dir(box)
// box[0].innerText = "Dog"
// box[1].innerText = "Pagal Dog"
// box[2].innerText = "Kutta Hai Tu kutta"
// let i = 1
// let dev = [12, 13, 23, 24, 34,]
// for (boxes of box) {
//     boxes.innerText = `This is me ${i} ${dev[i]}`
//     i++
// }

let bttn = document.createElement("button");
bttn.innerText = "click me!";
console.log(bttn);
bttn.style.color = "red"

let add2 = document.querySelectorAll("div")[1];
add2.append(bttn)
console.dir(add2)



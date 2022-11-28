const num = [3,4];
console.log(num);
console.log(num[0]);
console.log(num.length);


// add an element AT THE end of the array:

num.push(5,6);
console.log(num);




// add an element AT THE begining of the array:

num.unshift(1,2);
console.log(num);



// add an element AT THE middle of the array:

num.splice(3,0,'7','8');
console.log(num);


//how to print all the values from an array:
for (const key in num) {
  console.log(num[key]);
       
   
}



console.log('------');

for (const key in num) {
       const element = num[key];
       console.log(element);
}
console.log('------');

//find the elements in array:(primitive):
const s = [2,1,3,1,4];

console.log(s.indexOf(1));//1st occurence

console.log(s.indexOf(5));

console.log(s.indexOf('a'));

console.log(s.indexOf('1'));

console.log(s.indexOf(1, 1));

console.log(s.indexOf(1,s.indexOf(1)+1));// 2nd occurence

console.log(s.indexOf(3)!==-1);//true

console.log(s.includes(3));

console.log(s.includes(5));


console.log('------');

//find elements in array:(ref types):
// array can have objects...

const courses = [
   {id: 1, name: 'a'},//0
   {id: 2, name: 'b'}//1
];

console.log(courses);
//console.log( courses.includes({id: 1, name: 'a'}));//here the memeory location is  different cuase both the object {id: 1, name: 'a'}in const part and in console part they have different reference this is not right method it will give 'false'


const c1 = courses.find(function(course){

    return course.name === 'a';
});

console.log(c1);
console.log(c1.id);
console.log(c1.name);

const c5 = courses.findIndex(function(course){

 return course.name === 'a';
});

console.log(c5);





const c2 = courses.find(function(course){

 return course.name === 'c';
});

console.log(c2);


// using lamda function


const c3 = courses.find(course => course.name === 'a');
console.log(c3);



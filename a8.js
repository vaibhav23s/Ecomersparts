// const arr =[1,2,3,4,5]
// for  (const num of arr){
//     console.log(num);
    
// }

// const greet = "hellow world"

// for (const greeting of greet) {
//     console.log(`avorabody happy ${greet}`);
    
// }


// const map = new Map()
// map.set("india",`dali`)
//  map.set("usa",`washington`)
//  map.set("japan",`tokio`)
//  map.set("israil",`hayfa`)
//  console.log(map);
 
const obj = {
    game :"nfs",
    game2 : "korkha",

}
// for (const [key,value] of obj) {
//     console.log(key ,":-",value);  //ye syntex yaha kam nhi karta 
    
    
// }

for (const key in obj) {
   console.log(`${key} game for pro per4sone  ${obj[key]}`);
       
}
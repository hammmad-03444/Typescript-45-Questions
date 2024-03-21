// Making of objects
//Defining the types of items of the objects
//if we want to add data type of objest's list like name data type Price data type 
//interface deal1 {
// name:string,
// decription:string,
// price:number,
// availibility:boolean
// }
//is tarha sy har deal k upar karni hogi data type define



let  deal1={
    Name:'Regular Deal',
    Descrption:'2 Zinger & 1 Regular drink',
    Price:800,
    Availibility:true
}
let  deal2={
    Name:'Special Deal',
    Descrption:'2 Zinger ,2 wings ,1 club sandwcih & 2 Regular drink',
    Price:1399,
    Availibility:true
}
let  deal3={
    Name:'Jumbo Deal',
    Descrption:'2 Zinger ,1 Club snadwich ,2 drumsticks ,1 Broast & 1 Jumbo drink',
    Price:1899,
    Availibility:true
}
// make a empty array to push these objects init to use it in our program
let deals=[]
deals.push(deal1)
deals.push(deal2)
deals.push(deal3)
//make a for of loop to show that objects as a list 
for(let i of deals){
    console.log(`
        Tittle:${i.Name}
        Items:${i.Descrption}
        Price:${i.Price}
        Is Available:${i.Availibility}
    -----------\n`
    )
}

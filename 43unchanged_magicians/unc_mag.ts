function showmagicians(magicians:string[]): void {
    magicians.forEach(element => {
        console.log(element)
    });
}
function makeGreat(magicians:string[]) {
    const greatmagicians:string[]=[]
    magicians.forEach(element => {
        greatmagicians.push(`The Great ${element}`)
    });
    return greatmagicians
}
//array of magician's names
let magicianNames:string[]=["David",'Anthony','Charles','Mills','Micheal']
//show magician's names
showmagicians(magicianNames)
//Modifying the array by adding 'The Great' to each name
const greatmagicians=makeGreat([...magicianNames])
console.log('\n Great Magicians\n')
showmagicians(greatmagicians)
//show that magicians name are in the original form
console.log('/n Unchanged Magicinas')
showmagicians(magicianNames)
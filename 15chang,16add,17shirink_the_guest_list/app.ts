let list =['Azeem uncle','Shoaib bhai', 'Adnan uncle']
for(let i=0; i<list.length; i++){
    console.log('Dear Mr. ' + list[i] + ' \n\n we are requesting you to join us on saturday night dinner and make it memorable \n\nthanks\n\n')
}
let absentguest="Azeem"
let newguest='Sohail'
list[0]=newguest
for(let i=0; i<list.length; i++){
    console.log('Dear Mr. ' + list[i] + ' \n\n we are requesting you to join us on saturday night dinner and make it memorable\n\n thanks\n\n')
}
console.log('\nDear Mr. '+ absentguest + ' is not coming')
console.log('we are adding three new guests to our guest list because we just found a big table ')
list.push('Azhar chacho & my beloved susar',)
list.splice(3, 0,'Asim Bhai')
list.unshift('Imran Bhai')

for(let i=0; i<list.length; i++){
    console.log('Dear Mr. ' + list[i] + ' \n\n we are requesting you to join us on saturday night dinner and make it memorable \n\nthanks\n\n')
}
 console.log('\nsorry we do not found out new dinner table so we only have two guest space')


 while(list.length>2){
    let notinvitedlist=list.pop()
    console.log(`\nsorry Mr ${notinvitedlist}, we are sorry that we can not invite you on dinner`)
 }
 for(let i=0; i<list.length; i++){
    console.log('Dear Mr. ' + list[i] + ' \n\n you are still intivited\n\nthanks\n\n')
}
list.splice(0,2)
console.log(list)
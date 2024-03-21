let current_users:string[]=['aDil','erIc','john', 'freek','Zubair']
let new_users:string[]=['sultan','mehmooD','tehseen','eric','freek']
new_users.forEach (newusername =>{
    let lowecasenewusers:string=newusername.toLowerCase()

if (current_users.map(cuser => cuser.toLowerCase()).includes(lowecasenewusers)){
    console.log(`This user name ${newusername} is not available! please use different username`)
}
else{
    console.log(`This ${newusername} name is available`)
}
}) 
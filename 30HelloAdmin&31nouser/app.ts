let username=['admin','khan','eric','main','hammad']
for(let i=0;i<username.length;i++){
    if(username[i]=='admin'){
        console.log(`Hello ${username[0]},would you like to see a status report?`)
    }
    else {
        console.log(`Hello ${username[i]},thank you logging in again!` )
    }
}

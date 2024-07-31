const fs = require('fs')

function createTag(user){
    const tag = {
        "userId": user.id,
        "username": user.username,
        "balance": 0
    }
    return tag
}

function createFile(user, tag){
    fs.writeFile(`./userData/${user.id}.json`, JSON.stringify(tag), err => {
        if (err){
            console.log(err);
        }
    })
}

function readFile(user){
    let tag = {}
    try{
        const jsonString = fs.readFileSync(`./userData/${user.id}.json`, 'utf-8');
        tag = JSON.parse(jsonString);
    } catch (err) {
        console.log(err);
    }
    return tag
}

module.exports = {createTag, createFile, readFile}
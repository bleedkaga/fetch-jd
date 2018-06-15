const fs = require('fs');

const exists = fs.existsSync('public')
if(exists){
    fs.writeFile('public/test.txt', 'hello node', (err, data) => {
        if(err) throw Error('err')
        console.log('保存成功')
    })
} else {
    fs.mkdirSync('public')    
}
console.log(exists)
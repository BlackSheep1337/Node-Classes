const fs = require('fs');

/*
//reading files
let fileData;

fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    fileData = data.toString(); 
});

//writing files

console.log(fileData);

fs.writeFile('./docs/blog1.txt', (fileData + ' Net Ninjas'), () => {
    console.log('file was written')
});
*/



//directiories

if (fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted')
    });
}

//deleting files

if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {

        if (err) {
            console.log(err);
        }

        console.log('file deleted')
    });
}
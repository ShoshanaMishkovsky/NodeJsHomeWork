
import fs from 'fs'
import {ReadNameOfFiles} from './promise'
const myLibrary="./Library"
//async / await
fs.readdirSync(myLibrary).forEach(file=>{
    console.log(file)
})

//callbacks
fs.readdir(myLibrary, (err, files) => {
    if(err){
        console.log(err.message)
    }
    files.forEach(file => {
      console.log(file);
    });  
  });
 //promises
 ReadNameOfFiles(myLibrary)




 








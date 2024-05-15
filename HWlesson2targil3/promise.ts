
import fs from 'fs'
const n=5
export const ReadNameOfFiles = (FolderUrl:string):Promise<void>=>new Promise((resolve,reject)=>{
fs.readdir(FolderUrl ,(err,files)=>{
if(err){
    reject(err)
}
files.forEach(file=>{
    console.log(file)
})

resolve()
})
})

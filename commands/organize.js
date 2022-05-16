const path=require("path");
const fs=require("fs");
const typesObj=require("../extensions/extName");
const types=typesObj.types;
const folderArr=["media","archives","documents","app","others"];

// crate the folders to which insert the things
function createFolders(dirPath)
{
    let organizedFolder=path.join(dirPath,"Organized Files");
    if(!fs.existsSync(organizedFolder))
    {
        fs.mkdirSync(organizedFolder);
    }
    for(let i=0;i<folderArr.length;++i)
    {
        let folderPath=path.join(organizedFolder,folderArr[i]);
        if(!fs.existsSync(folderPath))
        {
            fs.mkdirSync(folderPath);
        }
    }
}

// loops through types array to check the extension of the file 
function check(arr,extension)
{
    for(let i=0;i<arr.length;++i)
    {
        if(extension===arr[i])
            return true;
    }
    return false;
}

// return the name of the folder in which we have to send the file
function returnFolderName(fileName) {
    let fileExtension=path.extname(fileName).slice(1);
    for(let key in types)
    {
        if(check(types[key],fileExtension))
            return key;
    }
    return "others";
}

function moveFile(srcFolder,destFolder,folder){
    let fileName=path.basename(srcFolder);
    console.log(fileName," copied to ",folder);
    fs.copyFileSync(srcFolder,destFolder);
}

function organize(dirPath){
    createFolders(dirPath);
    let currFolders=fs.readdirSync(dirPath);
    for(let i=0;i<currFolders.length;++i)
    {
        let curFile=path.join(dirPath,currFolders[i]);
        if(fs.lstatSync(curFile).isFile())
        {
            let folder=returnFolderName(currFolders[i]);
            let destFolder=path.join(dirPath,"Organized Files",folder,currFolders[i]);
            let srcFolder=path.join(dirPath,currFolders[i]);
            moveFile(srcFolder,destFolder,folder);
            fs.unlinkSync(srcFolder);
        }
    }
}

module.exports={
    organize:organize
}
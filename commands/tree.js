const fs=require("fs");
const path=require("path");

function tree(dirPath,level=0){
    dirPath=path.join(dirPath);
    let curDir=dirPath.split(path.sep).pop();
    let insideContentArr=fs.readdirSync(dirPath);
    let temp="\t".repeat(level);
    if(level!=0)
        temp+="|⟹➤";
    console.log('\033[32m',temp,curDir);
    for(let i=0;i<insideContentArr.length;++i)
    {
        let curPath=path.join(dirPath,insideContentArr[i]);
        if(fs.lstatSync(curPath).isDirectory())
        {
            tree(curPath,level+1);
        }
        else if(fs.lstatSync(curPath).isFile())
        {
            let temp="\t".repeat(level+1);
            temp+="|—";
            console.log('\033[30m',temp,insideContentArr[i]);
        }
    }
}

module.exports={
    tree:tree
}
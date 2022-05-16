#!/usr/bin/env node

const path=require("path");
const helpMod=require("./commands/help");
const organizeMod=require("./commands/organize");
const treeMod=require("./commands/tree");

// take input from array
let inputArr=process.argv.slice(2);

// classify the commands and perform action accordingly

let command=inputArr[0];
let dirPath=inputArr[1]==undefined?process.cwd():inputArr[1];
dirPath=path.join(dirPath);
switch(command)
{
    case "help":
        helpMod.help();
        break;
    case "tree":
        treeMod.tree(dirPath);
        break;
    case "organize":
        organizeMod.organize(dirPath);
        break;
    default:
        console.log("Wrong command. Type help to see the list of all the commands.");
}

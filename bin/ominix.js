#! /usr/bin/env node
const Commander = require('commander')
const { exec } = require('child_process');
const { promisify } = require('util')

const Project = require('./project')
const utils = require('./utils')
const fs = require('fs')

const rmAsync = promisify(fs.rmdir)

async function main(){
    Commander
        .version('v0.1')
        .option("create","Project Create")
        .option("-p --project [value]","Project Name")
        .option("-c --controller [value]","Controller Name")
        .parse(process.arqv)
        
    let project

    try{
        if (Commander.controller){
            return await utils.createController(Commander.controller)
        }
        
        if(Commander.project){
            project = new Project(Commander)
        }
        else{
            project = new Project({project:Commander.args[1]})
        }
        
        const proj = project.name?project.name:"my_project"

        await utils.createProject(proj)
        await utils.downloadFiles(proj)
        await utils.extractProject(proj)

        let files = await utils.loadFilesName(`./${proj}/ominix-model-master`)

        files.forEach(async item=>{
            await utils.fixDirectory(`./${proj}/ominix-model-master/${item}`,`./${proj}`)
        })
        
        await rmAsync(`./${proj}/ominix-model-master/`)

        exec(`cd ${project.name?project.name:"my_project"} && yarn install && cd ..`)

        console.log(`
You Project is mount.

To Running, use:
cd ${project.name?project.name:"my_project"}

&&

yarn dev
or
npm run dev
        `)
    }catch(error){
        console.log('ERROR:',error)
    }

}

module.exports = main()
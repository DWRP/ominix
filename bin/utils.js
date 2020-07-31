/*
 * Modules Dependency
 */

 const {
    writeFile,
    exists,
    mkdir,
    createWriteStream,
    createReadStream,
    rename,
    readdir,
    unlink
 } = require('fs')

 const {
    promisify
 }
 = require('util')
 
const { resolve, basename } = require('path')  
const axios = require('axios')
const extract = require('extract-zip')

const wfAsync = promisify(writeFile)
const exAsync = promisify(exists)
const mkAsync = promisify(mkdir)
const rdDirAsync = promisify(readdir)
const rmAsync = promisify(unlink)

class Utils{
    constructor(){
        this.DIR_PATH = process.cwd()
    }

    async createProject(projectName='my_project'){
        if(!(await exAsync(projectName))){
            await mkAsync(projectName)
        }
        return true
    }

    async createController(name){
        const model = require('./models/controllers')

        if(!(await exAsync(resolve(process.cwd(),"src","controllers",name)))){
            await mkAsync(resolve(process.cwd(),"src","controllers",name))
        }
        await wfAsync(resolve(process.cwd(),"src","controllers",name,'index.ts'),model(name))
        return true
    }

    async downloadFiles(pathFile="my_project"){
        const url = 'https://github.com/DWRP/ominix-model/archive/master.zip'
        const path = resolve(process.cwd(), pathFile,'master.zip')

        const writer = createWriteStream(path)

        const response = await axios({
            url,
            method: 'GET',
            responseType: 'stream'
        })

        response.data.pipe(writer)

        return new Promise((resolve, reject) => {
            writer.on('finish', resolve)
            writer.on('error', reject)
        })
    }

    async extractProject(pathFile="my_project"){
        const path = resolve(process.cwd(), pathFile,'master.zip')
 
        try {
            await extract(path, { dir: resolve(process.cwd(), pathFile) })
        } catch (err) {
            console.log("ERROR:",err)
        }
        
        await rmAsync(path)
    }

    async fixDirectory (file, dir2){
        var f = basename(file);
        var dest = resolve(dir2, f);

        rename(file, dest, (err)=>{
            if(err) throw err;
        })
    }

    async loadFilesName(path){
        const data = await rdDirAsync(path)
        return data
    }

}

 /*
 * Export
 */

exports = module.exports = new Utils()
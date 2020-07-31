/*
 * Modules Dependency
 */

 const {
    writeFile,
    exists,
    mkdir
 } = require('fs')

 const {
    promisify
 }
 = require('util')

const wfAsync = promisify(writeFile)
const exAsync = promisify(exists)
const mkAsync = promisify(mkdir)

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

}

 /*
 * Export
 */

exports = module.exports = new Utils()
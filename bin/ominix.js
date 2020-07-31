const { exec } = require('child_process');

const utils = require('./utils')

async function main(){
    await utils.createProject()
    console.log(process.cwd())

    exec('cd my_project && npm init -y && cd ..', (error, stdout, stderr) => {

        if (error) {
            console.log(`error: ${error.message}`)
            return
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`)
            return
        }
        console.log(`stdout: ${stdout}`)
    })

}

module.exports = main()
function model(modelName){
    return `
import { Request, Response } from 'express'

class ${modelName} {
    async index (req:Request,res:Response){
        
        return res.send({
            description: "Show all"
        })
    }

    async show (req:Request,res:Response){
        const { id } = req.params

        return res.send({
            description: "show only"
        })
    }

    async create (req:Request,res:Response){
        const { id, name } = req.body

        return res.send({
            description: "create any"
        })
    }
    
    async delete (req:Request,res:Response){
        const { id } = req.params

        return res.send({
            description: "delete any"
        })
    }
}

export default new ${modelName}()
    `
}

module.exports =  model
const {
    deepEqual,
    ok
} = require('assert')

const utils = require('../bin/utils')

describe('Create express Project Base',()=>{
    it('Create a dir in root',async ()=>{
        const result = await utils.createProject()
        const expected = true 
        deepEqual(result,expected)
    }
    )
})
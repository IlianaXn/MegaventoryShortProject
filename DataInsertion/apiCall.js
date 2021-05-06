const fetch = require("node-fetch")
const dotenv = require("dotenv")
dotenv.config()

async function apiCall (urlExt, method, action, data){
    data["APIKEY"] = `${process.env.APIKEY}`
    data["mvRecordAction"] = action
    return await fetch(`https://api.megaventory.com/v2017a${urlExt}`, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
        .then(data => {
            if (data.status !== 200)
                throw new Error('Something went wrong')
            else
                return data.json()
        })
        .then(data => {
            if (data.ResponseStatus.ErrorCode != 0)
                throw new Error(data.ResponseStatus.Message)
            else{
                console.log('API call executed successfully!')
                return data.entityID
            }
        })
        .catch(err => console.log(err))
}
async function apiCallGet (urlExt, method, data){
    data["APIKEY"] = `${process.env.APIKEY}`
    return await fetch(`https://api.megaventory.com/v2017a${urlExt}`, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
        .then(data => {
            if (data.status !== 200)
                throw new Error('Something went wrong')
            else
                return data.json()
        })
        .then(data => {
            if (data.ResponseStatus.ErrorCode != 0)
                throw new Error(data.ResponseStatus.Message)
            else{
                console.log('API call executed successfully!')
                return data
            }
        })
        .catch(err => console.log(err))
}

module.exports = {apiCall,apiCallGet}
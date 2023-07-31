export default defineEventHandler(async (event) => {
    // handle query params
    // const { name } = getQuery(event)
    // handle post data 
    // const { age } = await readBody(event)
    // api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/currencies?apikey=cur_live_LBFUNqZoNjMYn2cZgyNN6Sh3rqFPtFTXzUEqNtCU')
    return data
    // {
    //     message: `Hello, ${name}! You are ${age} years old`
    // }
})
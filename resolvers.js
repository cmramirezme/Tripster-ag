const axios = require('axios')
const { url, port, entryPoint } = require('./server');
const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
    Query: {
        hello: () => `Hello world ${URL}`,
        getAllBookings: () => {
            return [getBookings];
        }
    }
}

const getBookings = async () =>{
    try {
        const response = await axios(URL)
            .then(res => res.json())
        console.log(response)
        return response
    } catch (error) {
        console.log(error)
    }
}
module.exports = { resolvers }
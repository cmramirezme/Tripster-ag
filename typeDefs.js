const {gql} = require('apollo-server-express')

const typeDefs = gql`
    
    type Booking {
        id: ID,
        booking_id: Int,
        user_id: Int,
        flight_id: Int,
        date: String,
        time: Int,
    }
    type Query {
        hello : String
        getAllBookings:[Booking]
    }
`

module.exports =  {typeDefs}
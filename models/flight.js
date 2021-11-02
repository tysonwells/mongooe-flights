import mongoose from 'mongoose'

const Schema = mongoose.Schema
// Tickets schema
const ticketSchema = new Schema ({
  seat: {type: String, match: /[A-F][1-9]\d?/},
  price: {type: Number,},  
  }, {
    timestamps: true
  })
// Flight Schema
const flightSchema = new Schema ({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN'
  },
  flightNo: {
    type: Number,
    required: true
  },
  departs: {
    type: Date,
    default: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
  },
  tickets: [ticketSchema]
}, {
  timestamps: true
})
// flight property
const Flight = mongoose.model('Flight', flightSchema)
// ticket property
const Ticket = mongoose.model('Ticket', ticketSchema)
// Exporting the properties/models
export {
  Flight,
  Ticket,
}
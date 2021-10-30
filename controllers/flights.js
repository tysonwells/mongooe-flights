import { Flight } from '../models/flight.js'

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add Flight'
  })
}

function create (req, res) {
  Flight.create(req.body, function (error, flight) {
    res.redirect('/flights')
  })
}

function index(req, res) {
  Flight.find({}, function (error, flights) {
    res.render('flights/index', {
      flights,
      error,
      title: 'All Movies'     
    })
    
  })
}

export {
  newFlight as new,
  create,
  index,
}
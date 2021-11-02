import { Flight } from '../models/flight.js'

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add Flight'
  })
}

function create(req, res) {

  for (let key in req.body) {
		if (req.body[key] === '') {
			delete req.body[key];
		}
	}

  Flight.create(req.body, function(error, flight){
    
    if (error) {
      // console.log(error)
      return res.redirect("/flights/new")
    }
    res.redirect("/flights")
  })
}

function index(req, res) {
  Flight.find({}, function (error, flights) {
      res.render('flights/index', {
      flights,
      error,
      title: 'All Flights'     
    })
    
  })
}

function show(req, res) {
  Flight.findById(req.params.id, function(error, flight) {
    res.render('flights/show', {
      title: `${flight.title}`, flight
    })
  })
}

function createTicket(req, res) {
  console.log('creating ticket', req.params.id)
  console.log(req.body)
  Flight.findById(req.params.id, function(err, flight) {
    flight.tickets.push(req.body)
    console.log(flight)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

export {
  newFlight as new,
  create,
  index,
  show,
  createTicket,
}
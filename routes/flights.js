import { Router } from 'express'
const router = Router()
import * as flightsCtrl from "../controllers/flights.js"

/* GET flights listing. */
router.get('/', flightsCtrl.index)
router.get('/new', flightsCtrl.new)
router.get('/:id', flightsCtrl.show)
router.post('/', flightsCtrl.create)
router.post('/:id/tickets', flightsCtrl.createTicket)
router.post('/:id/destinations', flightsCtrl.addToDestination);

export {
  router
}

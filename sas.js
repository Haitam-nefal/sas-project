const prompt = require('prompt-sync')()

let seats = 50
// ===============================================
let trips = [
  {
    id: 1,
    departure: 'Safi',
    destination: 'Youssoufia',
    departureTime: '07:30',
    arrivalTime: '08:30',
    price: 25,
    availableSeats: 50
  },
  {
    id: 2,
    departure: 'Safi',
    destination: 'Marrakech',
    departureTime: '08:00',
    arrivalTime: '10:30',
    price: 90,
    availableSeats: 50
  },
  {
    id: 3,
    departure: 'Safi',
    destination: 'Casablanca',
    departureTime: '09:00',
    arrivalTime: '13:00',
    price: 140,
    availableSeats: 50
  },
  {
    id: 4,
    departure: 'Youssoufia',
    destination: 'Marrakech',
    departureTime: '09:15',
    arrivalTime: '11:00',
    price: 65,
    availableSeats: 50
  },
  {
    id: 5,
    departure: 'Youssoufia',
    destination: 'Casablanca',
    departureTime: '10:00',
    arrivalTime: '13:30',
    price: 110,
    availableSeats: 50
  },
  {
    id: 6,
    departure: 'Marrakech',
    destination: 'Casablanca',
    departureTime: '11:30',
    arrivalTime: '14:30',
    price: 120,
    availableSeats: 50
  },
  {
    id: 7,
    departure: 'Marrakech',
    destination: 'Rabat',
    departureTime: '12:00',
    arrivalTime: '16:00',
    price: 150,
    availableSeats: 50
  },
  {
    id: 8,
    departure: 'Casablanca',
    destination: 'Rabat',
    departureTime: '14:00',
    arrivalTime: '15:15',
    price: 40,
    availableSeats: 50
  },
  {
    id: 9,
    departure: 'Casablanca',
    destination: 'Kenitra',
    departureTime: '15:00',
    arrivalTime: '16:45',
    price: 55,
    availableSeats: 50
  },
  {
    id: 10,
    departure: 'Rabat',
    destination: 'Kenitra',
    departureTime: '16:00',
    arrivalTime: '16:45',
    price: 30,
    availableSeats: 50
  },
  {
    id: 11,
    departure: 'Rabat',
    destination: 'Fes',
    departureTime: '17:00',
    arrivalTime: '19:30',
    price: 95,
    availableSeats: 50
  },
  {
    id: 12,
    departure: 'Kenitra',
    destination: 'Fes',
    departureTime: '17:30',
    arrivalTime: '20:00',
    price: 85,
    availableSeats: 50
  },
  {
    id: 13,
    departure: 'Fes',
    destination: 'Meknes',
    departureTime: '08:30',
    arrivalTime: '09:20',
    price: 35,
    availableSeats: 50
  },
  {
    id: 14,
    departure: 'Fes',
    destination: 'Oujda',
    departureTime: '10:00',
    arrivalTime: '13:30',
    price: 130,
    availableSeats: 50
  },
  {
    id: 15,
    departure: 'Meknes',
    destination: 'Rabat',
    departureTime: '11:00',
    arrivalTime: '13:30',
    price: 80,
    availableSeats: 50
  },
  {
    id: 16,
    departure: 'Meknes',
    destination: 'Casablanca',
    departureTime: '12:00',
    arrivalTime: '15:00',
    price: 105,
    availableSeats: 50
  },
  {
    id: 17,
    departure: 'Casablanca',
    destination: 'El Jadida',
    departureTime: '16:30',
    arrivalTime: '18:00',
    price: 50,
    availableSeats: 50
  },
  {
    id: 18,
    departure: 'El Jadida',
    destination: 'Safi',
    departureTime: '18:30',
    arrivalTime: '20:30',
    price: 60,
    availableSeats: 50
  },
  {
    id: 19,
    departure: 'Marrakech',
    destination: 'Agadir',
    departureTime: '15:00',
    arrivalTime: '18:30',
    price: 100,
    availableSeats: 50
  },
  {
    id: 20,
    departure: 'Agadir',
    destination: 'Safi',
    departureTime: '19:00',
    arrivalTime: '22:00',
    price: 95,
    availableSeats: 50
  }
]
// ===============================================

let choix
let tickets = []
let config = {
  idTickets: 1
}

do {
  Menu()
  choix = Number(prompt('Votre choix : '))

  ChoixMenu(choix)
} while (choix !== 0)

function Menu() {
  console.log('='.repeat(30))
  console.log('RAILWAY MANAGER')
  console.log('='.repeat(30))
  console.log('1. Afficher les trajets')
  console.log('2. Acheter un ticket')
  console.log('3. Afficher les tickets')
  console.log('4. Annuler un ticket')
  console.log('5. Rechercher un ticket')
  console.log('6. Filtrer les trajets')
  console.log('7. Trier les trajets')
  console.log('7. Bonus')
  console.log('0. Quitter')
}

function ChoixMenu(a) {
  switch (a) {
    case 1: {
      AffichageTrajet()
      break
    }
    case 2: {
      AcheteTicket()
      break
    }
    case 3: {
      AffichageTickets()
      break
    }
    case 4: {
      AnnulerTicket()
      break
    }
    case 5: {
      RecherchTicketParNom()
      break
    }
    case 6: {
      FilterTrajets()
      break
    }
    case 7: {
      TrierTrajet()
      break
    }
    case 8: {
      Bonus()
      break
    }
    case 0: {
      console.log('Quitter...')
      break
    }
  }
}

function AffichageTrajet() {
  console.log('=== TRAJETS DISPONIBLES ===')
  for (let i = 0; i < trips.length; i++) {
    console.log(
      `#${trips[i].id} ${trips[i].departure} -> ${trips[i].destination}
      \nDepart : ${trips[i].departureTime}
      \nArrivée : ${trips[i].arrivalTime}
      \nPrix : ${trips[i].price} DH
      \nPlaces disponibles : ${trips[i].availableSeats}
      \n
      `
    )
  }
}

function AcheteTicket() {
  const name = prompt("Entrer Votre Nom : ");
  const idTrajet = Number(prompt("Identifiant du trajet : "))

  const trajet = trips.find((ele) => ele.id === idTrajet)
  if (!trajet) {
    console.log("Trajet introuvable.");
    return
  }

  if (trajet.availableSeats > 0) {
    const newTicket = {
      id: config.idTickets++,
      passengerName: name,
      tripId: idTrajet,
      seatNumber: CalculeNumberSeat(trajet.availableSeats),
      price: trajet.price
    }
    tickets.push(newTicket);

    console.log("Ticket acheté avec succès.");
    console.log(`Ticket #${newTicket.seatNumber}
      \nPassager: ${name}
      \nTrajet: ${trajet.departure} → ${trajet.destination}
      \nPlace: ${newTicket.seatNumber}
      \nPrix: ${trajet.price} DH`);

    trips = trips.map((ele) => ele.id === idTrajet ? { ...ele, availableSeats: ele.availableSeats - 1 } : ele)
  } else {
    console.log("Train complet.");
  }
}

function CalculeNumberSeat(availableSeats) {
  return seats - availableSeats + 1
}

function AffichageTickets() {
  console.log("=== TICKETS ===");
  if (tickets.length === 0) {
    console.log(`Aucun ticket enregistré.`);
    return
  }

  tickets.forEach((ele) => {
    AffichageTicket(ele)
  })
}

function AffichageTicket(ticket) {
  const trajet = trips.find((trip) => trip.id == ticket.tripId)
  console.log(`Ticket #${ticket.id}
      \nPassager : ${ticket.passengerName}
      \nTrajet : ${trajet.departure} -> ${trajet.destination}
      \nPlace : ${ticket.seatNumber}
      \nPrix : ${ticket.price} DH
  `);
}

function AnnulerTicket() {
  const idTicket = Number(prompt("Identifiant du ticket : "))
  const ticket = tickets.find((ele) => ele.id === idTicket)
  if (!ticket) {
    console.log("Ticket Introuvable !");
    return
  }
  trips = trips.map((ele) => ele.id === ticket.tripId ? { ...ele, availableSeats: ++ele.availableSeats } : ele)
  tickets = tickets.filter((ele) => ele.id !== idTicket)
  console.log(`Ticket annulé avec succès.`);
}

function RecherchTicketParNom() {
  const nom = prompt("Nom du passager : ")
  AffichageTicket(tickets.find((ele) => ele.passengerName === nom))
}

function FilterTrajets() {
  const ville = prompt("Ville de départ : ")
  const trajetsFiltrer = trips.filter((trip) => trip.departure.toLowerCase() === ville.toLowerCase())
  trajetsFiltrer.forEach((ele) => console.log(`${ele.departure} -> ${ele.destination} : ${ele.price} DH`))
}

function TrierTrajet() {
  trips.sort((a, b) => a.price - b.price).forEach((ele) => console.log(`${ele.departure} -> ${ele.destination} : ${ele.price} DH\n`))
}

function Bonus() {
  console.log(`Nombre total de tickets : ${tickets.length}`);
  console.log(`Chiffre d'affaires total : ${tickets.reduce((acc, cur) => Number(acc) + Number(cur.price), 0)} DH`);
  let arr = []
  tickets.forEach((ele) => arr.push(ele.tripId))
  console.log(arr);
  // console.log(`Trajet le plus vendu :`);
}

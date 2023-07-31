const imagePaths = require('../import.js')

exports.seed = async function (knex) {

  // Deletes ALL existing entries
  await knex('raptorsticketinfo').del()
  const ticketInfo = [
    {
      id: 1,
      eventname: `Raptor's Game - Lakers vs. Raptors`,
      artist: `OG Anunoby`,
      seat: `B2-11`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `A clash of titans. The Raptors take on the Lakers in a battle of the ages.`,
    },
    {
      id: 2,
      eventname: `Raptor's Game - Lakers vs. Raptors`,
      artist: `Pascal Siakam`,
      seat: `A15-16`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `A clash of titans. The Raptors take on the Lakers in a battle of the ages.`,

    },
    {
      id: 3,
      eventname: `Raptor's Game - Lakers vs. Raptors`,
      artist: `Lebron James`,
      seat: `P7-10`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `A clash of titans. The Raptors take on the Lakers in a battle of the ages.`,

    },
    {
      id: 4,
      eventname: `Raptor's Game - Lakers vs. Raptors`,
      artist: `Anthony Davis`,
      seat: `T11-09`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `A clash of titans. The Raptors take on the Lakers in a battle of the ages.`,

    },
  ];

  for (const ticket of ticketInfo) {
    await knex('raptorsticketinfo').insert({
      ...ticket,
      image: imagePaths[ticket.artist.replace(' ', '_').toLowerCase()](ticket.id),
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    });
  }
};





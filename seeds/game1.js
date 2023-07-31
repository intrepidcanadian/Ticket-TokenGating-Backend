const imagePaths = require('../import.js')

exports.seed = async function (knex) {

  // Deletes ALL existing entries
  await knex('raptorsticketinfo').del()
  const ticketInfo = [
    {
      id: 1,
      eventname: `Raptor's Game - Lakers vs. Raptors`,
      artist: `Anthony Davis`,
      seat: `B2-11`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `The upcoming Raptors vs. Lakers game promises to be a thrilling encounter, as two of the NBA's most formidable teams prepare to face off. Fans are eagerly anticipating the clash between the Toronto Raptors and the Los Angeles Lakers, a matchup that always delivers excitement and intensity on the court.`,
    },
    {
      id: 2,
      eventname: `Raptor's Game - Lakers vs. Raptors`,
      artist: `Lebron James`,
      seat: `A15-16`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `LeBron James, the iconic leader of the Lakers, needs no introduction. His unmatched basketball IQ, playmaking ability, and scoring prowess have made him one of the greatest players in NBA history. The Raptors will face the daunting task of trying to slow down LeBron's offensive onslaught and prevent him from taking over the game.`,

    },
    {
      id: 3,
      eventname: `Raptor's Game - Lakers vs. Raptors`,
      artist: `Anthony Davis`,
      seat: `P7-10`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `On the Lakers' side, Anthony Davis is expected to be a force to be reckoned with. Davis, with his exceptional skills in scoring, rebounding, and shot-blocking, is a dominant presence on the court. The Raptors will need to devise a solid defensive strategy to contain the Lakers' star forward and limit his impact on the game.`,

    },
    {
      id: 4,
      eventname: `Raptor's Game - Lakers vs. Raptors`,
      artist: `Lebron James`,
      seat: `T11-09`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `Both teams boast impressive depth in their rosters, with talented role players who can step up when needed. The Raptors have a strong supporting cast, including Scottie Barnes, and Chris Boucher, while the Lakers have players like Austin Reaves, and Rui Hachimura who can make significant contributions.`,

    },
    {
      id: 5,
      eventname: `Raptor's Game - Lakers vs. Raptors`,
      artist: `Lebron James`,
      seat: `S4-09`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `The Raptors vs. Lakers game is not just a contest between two teams; it represents a meeting of basketball legacies. The historic rivalry between the Lakers and the Raptors adds an extra layer of excitement and anticipation for fans and players alike.`,

    },
    {
      id: 6,
      eventname: `Raptor's Game - Lakers vs. Raptors`,
      artist: `OG Anunoby`,
      seat: `T20-10`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `OG is a DPOY candidate. However, as the stars of the game, Pascal Siakam, OG Anunoby, Anthony Davis, and LeBron James will be under immense pressure to deliver. Their ability to lead their respective teams and rise to the occasion will be crucial in determining the game's outcome.`,

    },
    {
      id: 7,
      eventname: `Raptor's Game - Lakers vs. Raptors`,
      artist: `OG Anunoby`,
      seat: `E4-03`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `OG Anunoby, known for his defensive prowess, will be a crucial factor for the Raptors' success in this game. Anunoby's ability to guard multiple positions and disrupt opponents' offensive plays makes him a valuable asset for the team. His tenacity and versatility on both ends of the court will play a vital role in neutralizing the Lakers' offensive threats.`,

    },
    {
      id: 8,
      eventname: `Raptor's Game - Lakers vs. Raptors`,
      artist: `Pascal Siakam`,
      seat: `F10-1`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `As the date of the game draws near, the anticipation continues to build. Basketball enthusiasts worldwide eagerly await the showdown between the Raptors and Lakers, hoping for a memorable display of skill, teamwork, and the sheer passion that makes the NBA such a captivating sport.`,

    },
    {
      id: 9,
      eventname: `Raptor's Game - Lakers vs. Raptors`,
      artist: `Pascal Siakam`,
      seat: `C5-22`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `Pascal Siakam, the talented forward for the Toronto Raptors, is expected to be a key player in this game. Siakam's dynamic style of play, combined with his ability to score from various positions on the court, makes him a potent offensive threat for the Raptors. His speed, agility, and defensive skills will be crucial in containing the Lakers' star players.`,

    },
    {
      id: 10,
      eventname: `Raptor's Game - Lakers vs. Raptors`,
      artist: `Anthony Davis`,
      seat: `A1-23`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `Beyond the individual matchups, the collective team strategies will be intriguing to observe. Both the Raptors and the Lakers have unique playing styles and offensive systems that have been refined over the years. The clash of these distinct approaches will be an exciting aspect of the game.`,

    },



  ];

  for (const ticket of ticketInfo) {
    await knex('raptorsticketinfo').insert({
      ...ticket,
      image: imagePaths(ticket.id),
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    });
  }
};





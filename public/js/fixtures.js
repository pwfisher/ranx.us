App.Ladder.FIXTURES = [
  {
    id: 1,
    name: 'DSC Mario Kart 1v1',
    path: 'dsc-mario-kart',
    players_per_game: 2,
    players: [ 2, 3, 4, 5 ],
    games: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]
  },
  {
    id: 2,
    name: 'DSC Table Tennis Singles',
    path: 'dsc-table-tennis',
    players_per_game: 2,
    players: [ 1, 3, 6, 8, 9 ],
    games: []
  },
  {
    id: 3,
    name: 'DSC Super Smash Brothers Brawl (4 players)',
    path: 'dsc-ssbb',
    players_per_game: 4,
    players: [ 1, 6, 7, 8, 9 ],
    games: []
  }
];

App.User.FIXTURES = [
  {
    id: 1,
    email: 'patrick@pwfisher.com',
    firstName: 'Patrick',
    lastName: 'Fisher',
    ladders: [ 2, 3 ],
    games: [ ]
  },
  {
    id: 2,
    email: 'lee@dollarshaveclub.com',
    firstName: 'Lee',
    lastName: 'Daub',
    ladders: [ 1 ],
    games: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13 ]
  },
  {
    id: 3,
    email: 'farmer@dollarshaveclub.com',
    firstName: 'Jason',
    lastName: 'Farmer',
    ladders: [ 1 ],
    games: [ 1, 2, 3, 4, 5, 8, 9, 12 ]
  },
  {
    id: 4,
    email: 'vahid@dollarshaveclub.com',
    firstName: 'Vahid',
    lastName: 'Redjal',
    ladders: [ 1 ],
    games: [ 6, 10, 11, 13 ]
  },
  {
    id: 5,
    email: 'jeff@dollarshaveclub.com',
    firstName: 'Jeff',
    lastName: 'Gross',
    ladders: [ 1 ],
    games: [ 7, 10, 11 ]
  },
  {
    id: 6,
    email: 'carlos@dollarshaveclub.com',
    firstName: 'Carlos',
    lastName: 'Nido',
    ladders: [ 2, 3 ],
    games: [ ]
  },
  {
    id: 7,
    email: 'juan@dollarshaveclub.com',
    firstName: 'Juan',
    lastName: 'Caldera',
    ladders: [ 3 ],
    games: [ ]
  },
  {
    id: 8,
    email: 'brian@dollarshaveclub.com',
    firstName: 'Brian',
    lastName: 'Gonzalez',
    ladders: [ 2, 3 ],
    games: [ ]
  },
  {
    id: 9,
    email: 'loren@dollarshaveclub.com',
    firstName: 'Loren',
    lastName: 'Khulusi',
    ladders: [ 2, 3 ],
    games: [ ]
  }
];

App.Game.FIXTURES = [
  {
    id: 1,
    ladder_id: 1,
    datetime: '2014-02-05 13:29:00',
    p1_id: 2,
    p1_score: 30,
    p2_id: 3,
    p2_score: 27
  },
  {
    id: 2,
    ladder_id: 1,
    datetime: '2014-02-06 16:24:00',
    p1_id: 2,
    p1_score: 15,
    p2_id: 3,
    p2_score: 27
  },
  {
    id: 3,
    ladder_id: 1,
    datetime: '2014-02-07 11:51:00',
    p1_id: 2,
    p1_score: 27,
    p2_id: 3,
    p2_score: 27
  },
  {
    id: 4,
    ladder_id: 1,
    datetime: '2014-02-10 14:25:00',
    p1_id: 2,
    p1_score: 30,
    p2_id: 3,
    p2_score: 30
  },
  {
    id: 5,
    ladder_id: 1,
    datetime: '2014-02-10 14:38:00',
    p1_id: 2,
    p1_score: 36,
    p2_id: 3,
    p2_score: 1
  },
  {
    id: 6,
    ladder_id: 1,
    datetime: '2014-02-10 17:28:00',
    p1_id: 2,
    p1_score: 30,
    p2_id: 4,
    p2_score: 21
  },
  {
    id: 7,
    ladder_id: 1,
    datetime: '2014-02-10 15:15:00',
    p1_id: 2,
    p1_score: 15,
    p2_id: 5,
    p2_score: 6
  },
  {
    id: 8,
    ladder_id: 1,
    datetime: '2014-02-12 10:00:00',
    p1_id: 2,
    p1_score: 36,
    p2_id: 3,
    p2_score: 18
  },
  {
    id: 9,
    ladder_id: 1,
    datetime: '2014-02-12 16:00:00',
    p1_id: 2,
    p1_score: 36,
    p2_id: 3,
    p2_score: 24
  },
  {
    id: 10,
    ladder_id: 1,
    datetime: '2014-02-12 16:43:00',
    p1_id: 4,
    p1_score: 25,
    p2_id: 5,
    p2_score: 24
  },
  {
    id: 11,
    ladder_id: 1,
    datetime: '2014-02-013 14:44:00',
    p1_id: 4,
    p1_score: 21,
    p2_id: 5,
    p2_score: 10
  },
  {
    id: 12,
    ladder_id: 1,
    datetime: '2014-02-14 12:52:00',
    p1_id: 2,
    p1_score: 33,
    p2_id: 3,
    p2_score: 24
  },
  {
    id: 13,
    ladder_id: 1,
    datetime: '2014-02-14 17:25:00',
    p1_id: 4,
    p1_score: 25,
    p2_id: 2,
    p2_score: 24
  }
];

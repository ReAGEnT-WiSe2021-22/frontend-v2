export enum Party {
  CDU = 'CDU',
  SPD = 'SPD',
  gruene = 'Grüne',
  FDP = 'FDP',
  linke = 'Linke',
  CSU = 'CSU',
  AFD = 'AFD',
  parteilos = 'Parteilos'
}

export type GeneratedTweet = {
  party: Party,
  createdAt: Date,
  userId: string,
  username: string,
}

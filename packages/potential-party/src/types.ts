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

export type Tweet = {
  id: string,
  text: string,
  name: string,
  userId: string,
  username: string,
  party: Party,
  createdDate: Date,
}

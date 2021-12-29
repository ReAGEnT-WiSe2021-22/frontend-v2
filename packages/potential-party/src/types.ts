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
  userId: string,
  username: string,
  name: string,
  hashtags: string[],
  party: Party,
  createdDate: Date,
  inReplyToUserId?: string,
  source?: string,
  sentiment: number,
  attachments?: number
  json?: string
}

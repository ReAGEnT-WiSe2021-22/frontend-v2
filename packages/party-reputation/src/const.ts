export const HOME = 'home';
export const LABEL_COUNT = 8;

export enum Party {
  CDU = 'CDU',
  SPD = 'SPD',
  gruene = 'Grüne',
  FDP = 'FDP',
  linke = 'Linke',
  CSU = 'CSU',
  AFD = 'AFD',
}

export const PARTY_COLORS: Record<string, string> = {
  [Party.CDU]: '#000',
  [Party.SPD]: '#f55',
  [Party.gruene]: '#5f5',
  [Party.FDP]: '#ff5',
  [Party.linke]: '#f8f',
  [Party.CSU]: '#88f',
  [Party.AFD]: '#aaf',
};

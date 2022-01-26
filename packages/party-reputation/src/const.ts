export const HOME = 'home';
export const LABEL_COUNT = 8;

export enum Party {
  CDU = 'CDU',
  SPD = 'SPD',
  gruene = 'Die_Gruenen',
  FDP = 'FDP',
  linke = 'Die_Linke',
  CSU = 'CSU',
  AFD = 'AFD',
}

export const PARTY_COLORS: Record<string, string> = {
  [Party.CDU]: '#000',
  [Party.SPD]: '#a33',
  [Party.gruene]: '#3a3',
  [Party.FDP]: '#aa3',
  [Party.linke]: '#a5a',
  [Party.CSU]: '#55a',
  [Party.AFD]: '#77b',
};

export const PARTY_RAW_DATA_COLORS: Record<string, string> = {
  [Party.CDU]: '#888',
  [Party.SPD]: '#faa',
  [Party.gruene]: '#7f7',
  [Party.FDP]: '#ff5',
  [Party.linke]: '#faf',
  [Party.CSU]: '#aaf',
  [Party.AFD]: '#ccf',
};

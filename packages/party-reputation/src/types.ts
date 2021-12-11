export type ReputationModel = {
  /**
  * Name of the party.
  * todo: create an enum of parties.
  */
  party: string
  /**
  * Dates of the reputation model (interval).
  */
  dates: string[]
  /**
  * Sentiment as a number (analysed).
  */
  sentiments: number[]
}

export enum Environment {
  development = 'development',
  staging = 'staging',
  production = 'production'
}

export type GenericObject = { [key: string]: string }

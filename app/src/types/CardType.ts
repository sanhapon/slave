export enum SuiteType {
    Clubs, Diamonds, Hearts, Spades
  }

export type CardType = {
    id: number;
    suite: SuiteType;
}

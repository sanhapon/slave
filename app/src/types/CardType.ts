export enum SuiteType {
    Diamonds=4, Hearts=2, Clubs=1, Spades=1
  }

export type CardType = {
    id: number;
    suite: SuiteType;
}

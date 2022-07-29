export enum SuiteType {
    Diamonds=4, Hearts=3, Clubs=2, Spades=1
  }

export type CardType = {
    id: number;
    suite: SuiteType;
}

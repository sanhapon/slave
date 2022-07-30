export enum SuiteType {
  Clubs=1, Diamonds=2, Hearts=3, Spades=4
  }

export type CardType = {
    id: number;
    suite: SuiteType;
    removed: boolean;
    key: string;
}

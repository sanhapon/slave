/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { CardType } from 'src/types/CardType';
import type { Players } from '../types/PlayerCard';

const startGame = () : Players => {
    const players : Players = {
        playerA: [],
        playerB: [],
        playerC: [],
        playerD: [],
    };

    const alreadySelected: string[] = [];
    let index = 0;

    for(let i=0; i<52; i++) {
        let found = false;
        let card : CardType | undefined;
        while(!found) {
            const id = Math.floor(Math.random() * 13) + 2;
            const suite = Math.floor(Math.random() * 4) + 1;
            const key = `${id}_${suite}`;

            if (!alreadySelected.includes(key)) {
                card = { id, suite, key, removed: false };
                alreadySelected.push(key);
                found = true;
            }
        }
        if (index % 4 === 0) {
            index = 0;
        }

        index++;

        switch(index) {
            case 1: players.playerA.push(card!); break;
            case 2: players.playerB.push(card!); break;
            case 3: players.playerC.push(card!); break;
            default: players.playerD.push(card!);
        }
    }

    return players;
}

export { startGame };

<script lang="ts">
import { debug } from 'svelte/internal';

    import Me from '../components/Me.svelte';
    import Table from '../components/Table.svelte';
    import type { CardType } from '../types/CardType';

    let toTable: CardType[] = [];
    let me: CardType[] = [];

    const handleISendCards = (e: CustomEvent<CardType[]>) => {
        toTable = e.detail.cards;
    }

    const alreadySelected : CardType[] = [];

    const startGame = () => {
        let done = false;
        let id = -1;
        let suite = 0;

        while(!done) {
            if (id === -1 || alreadySelected.find((item) => item.id === id && item.suite === suite)) {
                id = Math.floor(Math.random() * 13) + 2;
                suite = Math.floor(Math.random() * 3) + 1;
            } else {
                const selected : CardType = { id, suite, removed:false, key:`${id}_${suite}`};
                me.push(selected);
                alreadySelected.push(selected);
                
                if (me.length === 13)
                    done = true;
            }
        }
    }

    startGame();
</script>

<div class="container">
    <div class="p1">Player 1</div>
    <div class="p2"> 2</div>
    <div class="tab">
        <Table bind:cards={toTable}/>
    </div>
    <div class="p3">Player 3</div>
    <div class="me">
        <Me on:sendCards={handleISendCards} cards={me} />
    </div>
</div>

<style lang="scss">
    .container {
        width: 100vw;
        height: 88vh;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr 3fr 2fr;
        gap: 1px;
        background-color: #005005;

        > div {
            border: 1px solid black !important;
        }

        .p1 {
            grid-column: 1 / span 4;
            grid-row: 1;
        }
        .p2 {
            grid-column: 1;
            grid-row: 2;
        }
        .tab {
            grid-column: 2 / span 2;
            grid-row: 2;
        }

        .p3 {
            grid-column: 4;
            grid-row: 2;
        }
        .me {
            grid-column: 1 / span 4;
            grid-row: 3;
        }
    }

    @media(min-width:600px) {
        .container {
            .tab {
                display: flex;
                align-items: center;
                > div {
                    width: 100%;
                    margin: 0px;
                }
            }
        }
    }
</style>
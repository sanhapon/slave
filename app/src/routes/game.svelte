<script lang="ts">
    import { startGame } from '../services/Dealer';
    import Me from '../components/Me.svelte';
    import Table from '../components/Table.svelte';
    import type { CardType } from '../types/CardType';

    const players = startGame();

    let toTable: CardType[] = [];

    const handleISendCards = (e: CustomEvent<CardType[]>) => {
        toTable = e.detail.cards;
    }
</script>

<div class="container">
    <div class="container-row1">Player 1</div>
    <div class="container-row2">
        <div class="container-row2-p2">Player 2</div>
        <div class="container-row2-table">
            <Table bind:cards={toTable}/>
        </div>
        <div class="p3">Player 3</div>
    </div>
    <div class="container-row3">
        <Me on:sendCards={handleISendCards} cards={players.playerD} />
    </div>
</div>

<style lang="scss">
    .container {
        background-color: #005005;
        display: flex;
        height: 90vh;
        margin: 0 auto;
        flex-direction: column;

        &-row1 {
            // flex-grow: 1;
            min-height: 120px;
        }

        &-row2 {
            flex-grow: 2;
            height: 350px;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
        }

        &-row3 {
            // flex-grow: 1;
        }
    }

    // @media(min-width:600px) {
    //     .container {
    //         .tab {
    //             display: flex;
    //             align-items: center;
    //             > div {
    //                 width: 100%;
    //                 margin: 0px;
    //             }
    //         }
    //     }
    // }
</style>
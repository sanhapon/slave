<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { SuiteType, type CardType } from '../types/CardType';
    import Card from './Card.svelte';
    import SendBtn from './SendBtn.svelte';

    const dispatch = createEventDispatcher();

    let count = 0;
    let cards: CardType[] = [];
    let selectedCards: CardType[] = [];
    let cardElements: Card[] = []

    for (let i=0; i<13; i++) {
        cards.push(
            { id: i + 1, suite: SuiteType.Hearts }
        );
    }

    const changeCardState = (isSelected: boolean, card: CardType) : void => {
        if (isSelected && allow()) {
            count++;
            selectedCards = [...selectedCards, card];
        }

        if (!isSelected) {
            count--;
            selectedCards = selectedCards.filter(item => (item.id !== card.id || item.suite !== card.suite));
        }
    };
    
    const allow = () : boolean => {
        return count < 3;
    }

    const onSend = () => {
        for(let card of selectedCards) {
            const x: Card = cardElements[card.id];
            x.setBlank();
        }
        count = 0;

        dispatch('sendCards', { cards: selectedCards });
    }

</script>

<div class='me-area'>
    <div class="cards-box">
        {#each cards as card}
            <Card card={card} allow={allow} changeCardState={changeCardState} bind:this={cardElements[card.id]}/>
        {/each}
        <SendBtn text="pass" />
        <SendBtn text="send" on:click={onSend}/>

    </div>
</div>

<style lang="scss">
    .me-area {
        .cards-box {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-gap: 5px;
            margin: 10px;
        }

        .buttons { 
            margin: 50px auto;
            border: 1px solid #ccc;
            display: flex;
            justify-content: center;
        }
    }

    @media(min-width:600px) {
        .me-area {
            .cards-box {
            grid-template-columns: repeat(13, 1fr);

                > div {
                    border: 1px solid #ccc;
                    width: 1.8rem;
                    height: 2rem;
                }
            }
        }
    }
</style>

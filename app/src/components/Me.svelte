<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type { CardType } from '../types/CardType';
    import Card from './Card.svelte';
    import SendBtn from './SendBtn.svelte';

    export let cards: CardType[];
    cards = cards.sort((a, b) => a.id < b.id? -1: 1);

    const dispatch = createEventDispatcher();

    let count = 0;
    let selectedCards: CardType[] = [];
    let toRemoveCards: CardType[];

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

        count = 0;
        selectedCards = selectedCards.map((ct) =>  {return {...ct, removed: true}} );
        dispatch('sendCards', { cards: selectedCards });
    }

    $: toRemove = (c: CardType) => selectedCards.find(x => x.key === c.key && x.removed) !== undefined;
</script>

<div class='me-area'>
    <span>Me</span>
    <div class="cards-box">
        {#each cards as card} 
            <Card card={card} allow={allow} changeCardState={changeCardState}
                removed={toRemove(card)} />
        {/each}
        <SendBtn text="pass" />
        <SendBtn text="send" on:click={onSend}/>
    </div>
</div>

<style lang="scss">
    .me-area {
        padding-top: 15px;
        .cards-box {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-gap: 5px;
            margin: 10px;
            padding: 4px;
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

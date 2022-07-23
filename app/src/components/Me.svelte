<script lang="ts">
    import { SuiteType, type CardType } from '../types/CardType';
    import Card from './Card.svelte';
    import MyButton from './MyButton.svelte';

    let count = 0;
    let cards : CardType[] = [];
    for (let i=0; i<13; i++) {
        cards.push(
            { id: i + 1, suite: SuiteType.Clubs }
        );
    }

    const changeCardState = (isSelected: boolean) : void => {
        if (isSelected && allow()) {
            count++;
        }

        if (!isSelected) {
            count--;
        }
    };
    
    const allow = () : boolean => {
        return count < 3;
    }

</script>

<div class='me-area'>
    <div class="cards-box">
        {#each cards as card}
            <Card card={card} allow={allow} changeCardState={changeCardState}/>
        {/each}
        <MyButton />

    </div>
    <div class="buttons">
        <button>Bet</button>
    </div>
</div>

<style lang="scss">
    .me-area {
        .cards-box {
            // border: 1px solid #ccc;
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

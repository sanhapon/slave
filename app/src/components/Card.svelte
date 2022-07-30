<svelte:options accessors={true}/>

<script lang="ts">
import { afterUpdate } from 'svelte';
;
    import { SuiteType, type CardType } from '../types/CardType';

    export let card: CardType;
    export let allow = () : boolean => false;
    export let changeCardState = (isSelected: boolean, cardType: CardType) : void => {};
    export let selected = false;
    export let removed = false;

    let suiteStr : string = "";
    switch (card.suite) {
        case SuiteType.Spades: suiteStr = "spades"; break;
        case SuiteType.Clubs: suiteStr = "clubs"; break;
        case SuiteType.Hearts: suiteStr = "hearts"; break;
        default: suiteStr = "diamonds";
    }

    const onChangeState = () => {
        if (removed) return;
        if (selected ===true) {
            changeCardState(false, card);
            selected = false;
            return;
        }

        if (allow()) {
            changeCardState(true, card);
            selected = true;
            return;
        }
    }

    $: src = removed ? "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" 
                        : `/svg-cards/${card.id}_of_${suiteStr.toLocaleLowerCase()}.svg`;

    $: containerStyle = removed ? 'container removed' : selected ? 'container selected' : 'container';
</script>

<div class="{containerStyle}">
    <figure on:click="{onChangeState}">
        <img class="container-card" {src} alt="none"/>
    </figure>
</div>

<style lang="scss">

    .container {
        height: 100px;
        display: inline-flex;
        justify-content: center;
        align-items: flex-end;

        &-card {
            width: 55px;
            height: 75px;
        }
    }

    .selected {
        align-items: center;
        border: 0.1rem dashed #2e7d32;
    }

    .removed {
        height: 100%;
        :first-child {
            :first-child {
                border: 0.1rem dashed #2e7d32;
            }
        }
    }
</style>
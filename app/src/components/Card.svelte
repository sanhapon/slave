<svelte:options accessors={true}/>

<script lang="ts">;
    import { SuiteType, type CardType } from '../types/CardType';

    export let card: CardType;
    export let allow = () : boolean => false;
    export let changeCardState = (isSelected: boolean, cardType: CardType) : void => {};
    export let selected = false;
    export const setBlank = () => {
        selected = false;
        src = "";
    }

    let suiteStr : string = "";

    switch (card.suite) {
        case SuiteType.Spades: suiteStr = "spades"; break;
        case SuiteType.Clubs: suiteStr = "clubs"; break;
        case SuiteType.Hearts: suiteStr = "hearts"; break;
        default: suiteStr = "diamonds";
    }

    let src = `/svg-cards/${card.id}_of_${suiteStr.toLocaleLowerCase()}.svg`;

    const onChangeState = () => {
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

    $: containerStyle = selected ? 'container selected' : 'container';
</script>


<div class="{containerStyle}">
    <figure on:click="{onChangeState}">
        <img class="container-card" {src} alt="none" />
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
        border: 1px solid #ccc;
        background-color: #55f;
    }
</style>
<svelte:options accessors={true}/>

<script lang="ts">;
    import { SuiteType, type CardType } from '../types/CardType';
    export let card: CardType;
    export let allow = () : boolean => false;
    export let changeCardState = (isSelected: boolean, cardType: CardType) : void => {};

    let src = "images/spade-2.jpg";

    if (card.suite === SuiteType.Hearts ) {
        src = "images/spade-2.jpg";
    }

    export let selected = false;

    export const setBlank = () => {
        selected = false;
        src = "";
    }

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
        <!-- <figcaption></figcaption> -->
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
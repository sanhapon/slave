<script lang="ts">;
    import { SuiteType, type CardType } from '../types/CardType';
    export let cardType: CardType;

    let src = "images/spade-2.jpg";

    if (cardType.suite === SuiteType.Spades ) {
        src = "images/spade-2.jpg";
    }

    let clicked = false;

    const onClick = () => {
        clicked = !clicked;
        console.log(clicked);
    }

    $: containerStyle = clicked ? 'container click' : 'container';
</script>


<div class="{containerStyle}">
    <figure on:click="{onClick}">
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

    .click {
        align-items: center;
        border: 1px solid #ccc;
        background-color: #55f;
    }
</style>
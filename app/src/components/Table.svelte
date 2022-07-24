<script lang="ts">
    import Card from './Card.svelte';

    let cards: Card[] = []

    export const addCard = (card: Card) => {
        cards = [...cards, card];
    }

</script>

<div class="table">
    {#each cards as card}
        {card}
    {/each}
</div>

<style>
    .table {
        height: 100%;
        width: 100%;
        background-color: #2e7d32;
        border-radius: 5rem;
        border: 2px solid #fbc02d;
    }
</style>

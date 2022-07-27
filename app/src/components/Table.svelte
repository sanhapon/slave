<script lang="ts">
    import type { CardType } from 'src/types/CardType';
    import Card from './Card.svelte';

    export let cards: CardType[] = [];

    $: console.log("cards:" + cards);

</script>

<div class="table">
    {#each cards as card}
        <Card card={card} />
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

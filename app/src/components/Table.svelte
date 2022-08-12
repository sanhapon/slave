<script lang="ts">
    import type { CardType } from 'src/types/CardType';
    import Card from './Card.svelte';

    export let cards: CardType[] = [];

</script>

<div class="table">
    {#each cards as card}
        <Card isSmallSize={true} card={card} />
    {/each}
</div>

<style>
    .table {
        height: 350px;
        width: 200px;
        padding: 40px 10px;
        background-color: #2e7d32;
        border-radius: 4rem;
        border: 2px solid #fbc02d;
    }
</style>

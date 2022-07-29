<script lang="ts">
    export let count = 0;
    export let text = '';

    const handleClick = () => {
        count = count + 1;
    }
</script>

<button class="mybutton" on:click={handleClick}>
    {text}
</button>

<style>
    .mybutton {
        width: fit-content;
        padding: 10px;
        border-radius: 2em;
        border: 1px solid #cccccc ;
    }
</style>
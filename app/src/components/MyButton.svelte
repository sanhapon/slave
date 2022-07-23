<script lang="ts">
    export let count = 0;

    const handleClick = () => {
        console.log("click");
        count = count + 1;
    }
    

</script>

<button class="mybutton" on:click={handleClick}>
    click me
</button>

<style>
    .mybutton {
        width: fit-content;
        padding: 10px;
        border-radius: 2em;
        border: 1px solid #cccccc ;
    }
</style>
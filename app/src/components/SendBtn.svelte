<script lang="ts">
    export let text: string;
</script>

<div class="button"  on:click>
    {text}
</div>

<style lang="scss">
    .button {
        padding: 30px 5px;
        border: 1px solid #ccc;
        border-radius: 10px;
        background-color: #04f;
        align-self: center;

        &:hover {
            background-color: #03d;
        }
    }
</style>
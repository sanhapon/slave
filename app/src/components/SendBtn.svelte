<script lang="ts">
    export let text: string;
</script>

<div class="button"  on:click>
    {text}
</div>

<style lang="scss">
    .button {
        margin: 0 5px;
        padding: 30px 5px;
        border: 1px solid #ccc;
        border-radius: 8px;
        background-color: #04f;
        align-self: flex-end;

        &:hover {
            background-color: #03d;
        }
    }
</style>
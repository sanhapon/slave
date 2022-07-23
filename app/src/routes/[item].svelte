<script lang="ts">
    import { page } from "$app/stores";
    import MyButton from "../components/MyButton.svelte";
    let x: number;
</script>


<MyButton bind:count={x}></MyButton>
<p>{x}</p>
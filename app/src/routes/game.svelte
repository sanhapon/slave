<script lang="ts">
    import Me from '../components/Me.svelte';
</script>

<div class="container">
    <div class="p1">Player 1</div>
    <div class="p2"> 2</div>
    <div class="tab"><div></div></div>
    <div class="p3">Player 3</div>
    <div class="me"><Me /></div>
</div>

<style lang="scss">
    .container {
        width: 100vw;
        height: 100vh;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr 3fr 2fr;
        gap: 1px;
        background-color: #005005;

        > div {
            border: 1px solid black !important;
        }

        .p1 {
            grid-column: 1 / span 4;
            grid-row: 1;
        }
        .p2 {
            grid-column: 1;
            grid-row: 2;
        }
        .tab {
            grid-column: 2 / span 2;
            grid-row: 2;
            display: flex;
            justify-content: center;

            > div {
                padding: 90px;
                margin: 9px;
                background-color: #2e7d32;
                border-radius: 5rem;
                border: 2px solid #fbc02d;
            }
        }

        .p3 {
            grid-column: 4;
            grid-row: 2;
        }
        .me {
            grid-column: 1 / span 4;
            grid-row: 3;
        }
    }

    @media(min-width:600px) {
        .container {
            .tab {
                display: flex;
                align-items: center;
                > div {
                    width: 100%;
                    margin: 0px;
                }
            }
        }
    }
</style>
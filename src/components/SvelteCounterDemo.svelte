<script>
    let count = 0;
</script>

<div class="grid grid-cols-2 grid-rows-2 w-fit gap-1">
    <span class="col-span-2">You clicked {count} times!</span>

    <button on:click={() => count -= 1}>Decrement</button>
    <button on:click={() => count += 1}>Increment</button>
</div>
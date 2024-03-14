<script lang="ts">
  let title = "Svelte (from variable)"

  const modify = () => {
    title = "modified"
  }

  let username = ""

  const fruits = [
    { name: "alma", color: "piros" },
    { name: "korte", color: "barna" },
    { name: "narancs", color: "narancssarga" },
    { name: "cseresznye", color: "piros" },
  ]

  let isShown = false
</script>

<div>Hello { title }</div>
<button on:click={modify}>Modify</button>
<hr>
<input type="text" bind:value={username}>
<button on:click={() => username = ""}>reset</button>
<button on:click={() => console.log(username)}>log</button>

<hr />

{#each fruits as fruit}
  <p class="text-warning">{ fruit.name } ({fruit.color})</p>
{/each}

<section>
  <button on:click={() => isShown = !isShown}>Toggle</button>
  {#if isShown}
    <div>Haho</div>
  {:else}
    <div>secret</div>
  {/if}
</section>

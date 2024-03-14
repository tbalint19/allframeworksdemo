<script lang="ts">
  let title = "Svelte (from variable)"

  const modify = () => {
    title = "modified"
  }

  let username = ""
</script>

<div>Hello { title }</div>
<button on:click={modify}>Modify</button>
<hr>
<input type="text" bind:value={username}>
<button on:click={() => username = ""}>reset</button>
<button on:click={() => console.log(username)}>log</button>
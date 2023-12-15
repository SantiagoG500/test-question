<script>
  export let txt_set = new Set();
  const txtArr = Array.from(txt_set);
</script>

{#each txtArr as txt}
  <main>{txt}</main>
{/each}

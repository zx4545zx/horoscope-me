<script>
  import { onMount } from "svelte";
  import { themeChange } from "theme-change";

  let theme = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];

  onMount(() => {
    themeChange(false);
  });
</script>

<div class="navbar bg-primary mb-5 w-full">
  <div class="navbar-start">
    <a href="/" class="btn btn-ghost normal-case text-xl">HOROSCOPE</a>
  </div>
  <div class="navbar-end">
    <select data-choose-theme class="select select-secondary w-full max-w-xs">
      <option value="mytheme">Default</option>
      {#each theme as tme}
        <option value={tme}>{tme}</option>
      {/each}
    </select>
  </div>
</div>

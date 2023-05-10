<script lang="ts">
  import { isExpired } from "$lib/security";
  import { goto } from "$app/navigation";

  if (isExpired()) {
    goto("/error");
  }
</script>


<main>
  <h2>Dashboard</h2>
</main>

<style>
</style>


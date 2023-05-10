<script lang="ts">
  import { getImages } from '$lib/api';
  import { RingLoader } from 'svelte-loading-spinners';
  import { isExpired } from '$lib/security';
  import { goto } from '$app/navigation';
  import PromptInput from '$lib/PromptInput.svelte';
  import Header from '$lib/Header.svelte';

  if (isExpired()) {
    goto('/error');
  }

  let subject = "";
  let images = "";
  let showSpinner = false;

  async function handleSubmit(event: any) {
    const value = event.detail;

    if (value !== '') {
      showSpinner = true;
      try {
        images = await getImages(value);
        images = images.data;
        showSpinner = false;
      } catch (err) {
        console.error(err);
      }
    }
  }
</script>

<Header />

<main>
  <div class="container" style="position: fixed; inset: 0; display: flex; justify-content: center; ">
    <div>
      <div>
      <h2>Create Campaign</h2>
      <PromptInput on:submit={handleSubmit} />
      <div style="margin-left:0; padding-left: 0; margin-top: 0; display:block; width:500px;" class="blurb">Use the prompt to search for creative </div>
    </div>
    </div>
  </div>

  {#if images}
    <div class="image-gallery">
      {#each images as image}
        <img src={image.url} alt="ai"/>
      {/each}
    </div>
  {/if}
</main>

<div>
  {#if showSpinner}
    <div class="spinner-container">
      <RingLoader class="spinner" />
    </div>
  {/if}
</div>


<style>
  h2 {
    margin-bottom: 1rem;
    width: 600px;
    clear: both;
  }
  .spinner-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .container {
    padding-left: 15%;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .container div {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }

.image-gallery {
  position: absolute;
  top: 25%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  align-items: center;
}
  /* .image-gallery {
    width: 100%;
    display: flex;
    flex-direction: wrap;
  } */

  .image-gallery img {
    max-width: 18%;
    height: auto;
    border-radius: 20%;
  }
  main {
    display: flex;
    justify-content: center;
  }

  div {
    margin: 2rem;
  }

  h2 {
    margin-bottom: 1rem;
  }
</style>


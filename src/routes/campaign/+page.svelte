<script lang="ts">
  import { getImages } from '$lib/api';
  import { RingLoader } from 'svelte-loading-spinners';
  import { isExpired } from '$lib/security';
  import { goto } from '$app/navigation';
  import PromptInput from '$lib/PromptInput.svelte';
  import Header from '$lib/Header.svelte';

  function handleInputSubmit(value) {
    // Handle the input submission here
    console.log('Submitted value:', value);
  }

  if (isExpired()) {
    goto('/error');
  }

  let subject = "";
  let images = "";
  let showSpinner = false;

  async function handleSubmit(value: string) {
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
      <h2>Create Campaign</h2>
      <PromptInput on:submit={handleSubmit} />
      <div style="margin-left:0; padding-left: 0; margin-top: 0; display:block; width:500px;" class="blurb">Use the prompt to search for creative </div>
    </div>

    {#if images}
      <div class="image-gallery">
        {#each images as image}
          <img src={image.url} alt="ai"/>
        {/each}
      </div>
    {/if}
  </div>
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
    overflow: hidden;
    display: block;
    display: flex;
    justify-content: center;
    margin-left: 400px;
  }

  .container div {
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    float: center;
  }

  .image-gallery {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }

  .image-gallery img {
    max-width: 70%;
    height: auto;
  }
  .input {
    border: none;
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    font-size: 16px;
    padding: 10px 20px;
    width: 100%;
    margin-bottom: 10px;
    height: 40px;
  }

  .input:focus {
    outline: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
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
  
  html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

  input {
    width: 100%;
    height: 150px;
    border: 1px solid #ccc;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 5px;
    resize: vertical;
  }
</style>


<script>
  import { getImages } from '$lib/api';
  import { RingLoader } from 'svelte-loading-spinners';

  let subject = "";
  let images = "";
  let showSpinner = false;

  async function handleSubmit() {
    showSpinner = true;
    try {
      images = await getImages(constraintKeywords, imageConstraints, subject);
      images = images.data;
      showSpinner = false;
    } catch (err) {
      console.error(err);
    }
  }
</script>

<main>
  <div class="container" style="display:block; clear:both">
    <div>
      <h2>Subject</h2>
      <input class="input" type="text" bind:value={subject} />
    </div>

    <div>
      <button class="button" on:click={handleSubmit}>Get Images</button>
      {#if showSpinner}
        <div class="spinner-container">
          <RingLoader class="spinner" />
        </div>
      {/if}
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

<style>
  .spinner-container {
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Adjust the height as needed */
  }

  .container {
    overflow: hidden;
    display: block;
  }

  .container div {
    box-sizing: border-box;
    width: 25%;
    padding: 10px;
    float: left;
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

  .button {
    height: 40px;
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    transition-duration: 0.4s;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    float: right;
  }

  .button:hover {
    background-color: #3e8e41; /* Dark green */
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

  textarea, input {
    width: 100%;
    height: 150px;
    border: 1px solid #ccc;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 5px;
    resize: vertical;
  }
</style>


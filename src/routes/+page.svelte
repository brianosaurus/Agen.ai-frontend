<svelte:head>
  <script src="https://accounts.google.com/gsi/client" async defer></script>
</svelte:head>

<script lang="ts" module>
  import { error } from '@sveltejs/kit';
  import { invalidateAll, goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { PUBLIC_GOOGLE_CLIENT_ID } from '$env/static/public';
  import { deserialize } from '$app/forms';

  const CredResponse = async (response: any) => {
    console.log(response)
    console.log('credential: ', response.credential)

    const credential = response.credential;
    await getJWTFromServer(credential);
    goto('/campaign'); 
  };

  async function getJWTFromServer(credential: string) {
    const formData = new FormData();
    formData.append('credential', credential);

    try {
      const response = await fetch('?/login', {
          method: 'POST',
          body: formData,
          credentials: 'include' // Send cookies along with the request
      });

      const result = deserialize(await response.text());

      console.log('result: ', result)

      if (result.type === 'success') {
          // re-run all `load` functions, following the successful update
          await invalidateAll();
      } else {
        throw error(404, 'invalid token');
      }
    } catch {
      throw error(404, 'something went wrong');
    }
  }
  
  let canvas: any; 

  onMount(async () => {   
    google.accounts.id.initialize({
        client_id: PUBLIC_GOOGLE_CLIENT_ID,
        ux_mode: "popup",
        context: "use",
        callback: CredResponse
    });
    google.accounts.id.renderButton(canvas, {
        width: '220',      
        theme: 'outline',
        size: 'large',
        type: 'standard',
        text: 'signin_with',
        shape: 'rectangular',
        logo_alignment: 'left',
          
    });

  });

</script>

<!-- homepage.svelte -->
<div class="home">
  <img src="Agen.png" alt="Agen.ai Logo" class="logo">
  <h1>Welcome to Agen.ai</h1>
  <div class="g_id_signin" bind:this={canvas}/> 
</div>

<style>
  /* Add styles here */
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f2f2f2;
    font-family: "Lucida Console", "Courier New", monospace;
  }
  .logo {
    max-width: 200px;
    margin-bottom: 1rem;
    border-radius: 50%;
  }
</style>

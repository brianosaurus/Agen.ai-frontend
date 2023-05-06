<!-- Home.svelte -->
<div class="home">
  <img src="Agen.png" alt="Agen.ai Logo" class="logo">
  <h1>Welcome to Agen.ai</h1>
  <GoogleSignInButton />
</div>

<script>
  import { browser } from '$app/environment'
  import GoogleSignInButton from "$lib/GoogleSignInButton.svelte";
</script>


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
  .cta {
    background-color: #0077FF;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .cta:hover {
    background-color: #0066CC;
  }
</style>

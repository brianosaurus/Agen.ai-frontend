<!-- Home.svelte -->
<div class="home">
  <img src="Agen.png" alt="Agen.ai Logo" class="logo">
  <h1>Welcome to Agen.ai</h1>
  <GoogleSignInButton />
</div>

<script>
  import GoogleSignInButton from "./GoogleSignInButton.svelte";
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
  }
  .logo {
    max-width: 200px;
    margin-bottom: 1rem;
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

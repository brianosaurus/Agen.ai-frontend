<!-- App.svelte -->
<script>
  import Home from './Home.svelte';

  console.log("App.svelte)

  let userLoggedIn = false;
  window.onLoadCallback = () => {
    userLoggedIn = gapi.auth2.getAuthInstance().isSignedIn.get();
    if (userLoggedIn) {  
      // Handle login
    }
  }
</script>

<Home />
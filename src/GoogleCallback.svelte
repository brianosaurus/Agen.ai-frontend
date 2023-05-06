<script>
  import { onMount } from 'svelte';
  import { signIn } from './google-auth.js'; // your module that handles Google Sign-In

  onMount(async () => {
    const authenticated = await signIn(); // use your signIn function to handle the Google Sign-In
    if (authenticated) {
      // redirect the user to the Campaign component
      window.location.href = '/campaign';
    }
  });
</script>

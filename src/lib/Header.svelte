<script lang="ts" module>
  import { browser } from '$app/environment';
  import { decodeJwt } from './jwt';

  const getCookieValue = (name: string): string => (
    document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
  )

  let picture: string = '';

  if (browser) {
    const cookie = getCookieValue('session');
    const user: any = decodeJwt(cookie);
    picture = user?.picture;
  }
</script>

<div class="left-image-container">
  <img src="Agen.png" alt="Agen.ai Logo" class="logo">
</div>

{#if picture != '' && picture != undefined}
  <div class="right-image-container">
    <img src={picture} alt="profile avitar" referrerpolicy="no-referrer" />
  </div>
{/if}

<style>
  .left-image-container {
    position: absolute;
    top: 0;
    left: 0;
  }

  .left-image-container img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
  }

  .right-image-container {
    position: absolute;
    top: 0;
    right: 0;
  }

  .right-image-container img {
    height: 48px;
    width: 48px;
    border-radius: 50%;
    margin: 10px;
  }
</style>
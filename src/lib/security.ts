  import { browser } from '$app/environment';
  import { error } from '@sveltejs/kit';
  import { decodeJwt } from './jwt';

  function checkExpiration(expiration: number): boolean {
    const now = Math.floor(Date.now() / 1000)

    return now > expiration
  }

  const getCookieValue = (name: string): string => (
    document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
  )

  export function isExpired() {
    if (browser) {
      const token: string = getCookieValue('session')

      if (token === '') {
        return false;
      }

      const user: any = decodeJwt(token);
      const expiration: number = user.exp;
      const isExpired: boolean = checkExpiration(expiration);

      return isExpired;
    }
  }

  import { browser } from '$app/environment';
  import { error } from '@sveltejs/kit';
  import { decodeJwt } from './jwt';

  const getCookieValue = (name: string): string => (
    document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
  )

  function checkExpiration(expiration: number): boolean {
    const now = Math.floor(Date.now() / 1000)

    return now > expiration
  }

  export function isExpired() {
    if (browser) {
      const token: string = getCookieValue('session')

      if (token === ''|| token === undefined) {
        return true;
      }

      const user: any = decodeJwt(token);
      const expiration: number = user.exp;
      const isExpired: boolean = checkExpiration(expiration);

      return isExpired;
    }
  }

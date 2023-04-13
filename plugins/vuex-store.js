import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'hownow-store',
      paths: [
        'authentication.authenticated'
      ],
      // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 7, secure: true }),
        removeItem: key => Cookies.remove(key)
      }
    })(store)
  })
}

/**
 * localStorage工具
 */
const localStore = {
  get(name) {
    const storage = window.localStorage[name]
    try {
      return JSON.parse(storage)
    } catch (e) {
      return storage
    }
  },
  set(name, obj) {
    window.localStorage[name] = JSON.stringify(obj)
  },
  del(name) {
    window.localStorage.removeItem(name)
  },
  clear() {
    window.localStorage.clear()
  }
}

/**
 * sessionStorage工具
 */
const sessionStore = {
  get(name) {
    const storage = window.sessionStorage[name]
    try {
      return JSON.parse(storage)
    } catch (e) {
      return storage
    }
  },
  set(name, obj) {
    window.sessionStorage[name] = JSON.stringify(obj)
  },
  del(name) {
    window.sessionStorage.removeItem(name)
  },
  clear() {
    window.sessionStorage.clear()
  }
}

export {localStore, sessionStore}
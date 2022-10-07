export const storage = (type) => {
  const store = window[`${type}Storage`];
  const isSupported = typeof Storage === 'function';

  return {
    isSupported,
    set(key, value) {
      try {
        store.setItem(key, JSON.stringify(value));
      } catch (e) {
        if (e instanceof DOMException) {
          console.warn(e);
        }
      }
    },
    get(key) {
      try {
        return JSON.parse(store.getItem(key));
      } catch (e) {
        console.warn(e);
      }
    },
    remove(key) {
      store.removeItem(key);
    },
    empty() {
      store.clear();
    },
  };
};

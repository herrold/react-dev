export const supportingLocalStorage = () => {
  if ((typeof localStorage === 'undefined') || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    return new LocalStorage('./scratch');;
  } else {
    return localStorage;
  }
}


export const getAll = (storeName: string) => {
  try {
    return JSON.parse(supportingLocalStorage()[storeName]);
  } catch (e) {
    return [];
  }
};

export const remove = (storeName: string) => {
  supportingLocalStorage().removeItem(storeName);
};
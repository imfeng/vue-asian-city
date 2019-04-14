export const state = () => ({
  locales: [{
      code: 'cn',
      name: 'CN'
    },
    {
      code: 'en',
      name: 'EN'
    },
    {
      code: 'jp',
      name: 'JP'
    }
  ],
  locale: 'cn'
});

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.find(el => el.code === locale)) {
      state.locale = locale
    }
  }
};
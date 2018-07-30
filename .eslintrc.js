module.exports = {
  plugins: ['babel'],
  extends: ['airbnb'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    semi: ['error', 'never'],
  },
}

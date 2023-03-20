module.exports = {
  '*.{js,jsx,ts,tsx}': () => 'pnpm check-lint',
  '**/*.ts?(x)': () => 'pnpm check-types',
  '*': ['prettier -c'],
}

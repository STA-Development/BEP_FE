module.exports = {
  '**/*.(ts|tsx)': () => 'pnpm tsc --pretty --noEmit --incremental false',
  '**/*.(ts|tsx|js)': (filenames) => [
    `pnpm eslint ${filenames.join(' ')}`,
    `pnpm prettier -w ${filenames.join(' ')}`,
  ],
  '**/*.(md|json)': (filenames) => `pnpm prettier -w ${filenames.join(' ')}`,
}

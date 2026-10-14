export const themeStorageKey = 'hugo-portfolio-theme'

// Run before paint. Only a fixed preference is stored; no user content is injected.
export const themeScript = `(() => {
  let theme;
  try { theme = localStorage.getItem('${themeStorageKey}'); } catch {}
  if (theme !== 'light' && theme !== 'dark') {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.documentElement.dataset.theme = theme;
})();`

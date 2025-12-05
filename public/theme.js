// Lógica de Ejecución Inmediata (IIFE) para el ANTI-FOUC
// ¡Este bloque se debería ejecutar lo antes posible!
;(() => {
  const storageKey = 'theme'
  const classList = document.documentElement.classList

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const storedTheme = localStorage.getItem(storageKey)

  // Aplicar la clase 'dark' inmediatamente para evitar el FOUC
  if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
    classList.add('dark')
  } else if (storedTheme === 'light') {
    classList.remove('dark')
  }
})()

// Función que el botón llamará.
window.toggleTheme = function () {
  const storageKey = 'theme'
  const classList = document.documentElement.classList

  // Determinar si el tema actual es oscuro (si tiene la clase 'dark')
  const isCurrentlyDark = classList.contains('dark')

  // El nuevo tema será el opuesto
  const newThemeIsDark = !isCurrentlyDark

  // Alternar la clase en el HTML
  // Si newThemeIsDark es true, añade 'dark'. Si es false, la elimina.
  classList.toggle('dark', newThemeIsDark)

  // Guardar la nueva preferencia
  const newTheme = newThemeIsDark ? 'dark' : 'light'
  localStorage.setItem(storageKey, newTheme)
}

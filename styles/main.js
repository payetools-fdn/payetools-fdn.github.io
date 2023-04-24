// Set 'dark' theme as the default instead of 'auto' - SW - 24-Apr-2023
function setTheme(theme) {
    localStorage.setItem('theme', theme)
  }


function initTheme() {
    setTheme(localStorage.getItem('theme') || 'dark')
  }

initTheme();
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'indigo',
      secondary: 'purple',
      success: 'teal',
      info: 'blue',
      warning: 'amber',
      error: 'red',
      neutral: 'slate',
      accent: 'pink'
    },
    footerColumns: {
      slots: {
        label: 'text-white',
        linkLabel: 'text-gray-400 hover:text-white transition-colors'
      }
    },
    authForm: {
      slots: {
        title: 'text-white',
        description: 'text-gray-400'
      }
    }
  }
})

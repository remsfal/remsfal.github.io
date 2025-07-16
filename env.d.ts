/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BASE_URL: string
    readonly VITE_DOCS_URL: string
    // add more env variables here if needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
  
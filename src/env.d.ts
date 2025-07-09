// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly BASE_URL: string 
    readonly VITE_DOCS_URL: string
    readonly VITE_BASE_URL: string 
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
  
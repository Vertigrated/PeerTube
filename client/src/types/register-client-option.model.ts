import { RegisterClientHookOptions } from '@shared/models/plugins/register-client-hook.model'

export type RegisterClientOptions = {
  registerHook: (options: RegisterClientHookOptions) => void

  peertubeHelpers: RegisterClientHelpers
}

export type RegisterClientHelpers = {
  getBaseStaticRoute: () => string

  isLoggedIn: () => boolean

  getSettings: () => Promise<{ [ name: string ]: string }>

  notifier: {
    info: (text: string, title?: string, timeout?: number) => void,
    error: (text: string, title?: string, timeout?: number) => void,
    success: (text: string, title?: string, timeout?: number) => void
  }

  translate: (toTranslate: string) => Promise<string>
}

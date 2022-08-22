import * as en from 'internationalization/en'

type Keys = typeof en

type KeysUnion<T, Cache extends string = ''> = T extends PropertyKey
  ? Cache
  : {
      [P in keyof T]: P extends string
        ? Cache extends ''
          ? KeysUnion<T[P], `${P}`>
          : Cache | KeysUnion<T[P], `${Cache}.${P}`>
        : never
    }[keyof T]

export type TranslationKeys = KeysUnion<Keys>

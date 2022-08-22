import { TOptions } from 'i18next'
import { useTranslation } from 'react-i18next'
import { TranslationKeys } from 'typings/internationalization'

export const useTranslate = () => {
  const { t } = useTranslation()

  const translate = (value: TranslationKeys, options?: TOptions) =>
    t(value, options)

  return { translate }
}

import { createContext, FC, PropsWithChildren, useCallback, useState } from "react";
import { LoadingIndicator } from "ui-kit";

import styles from './styles.module.scss';

type LoadingContextType = {
  isLoading: boolean;
  show: () => void;
  close: () => void;
}

export const LoadingContext = createContext<LoadingContextType>({} as LoadingContextType);

export const LoadingProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)

  const onShow = useCallback(() => {
    setIsLoading(true)
  }, [])
  const onClose = useCallback(() => {
    setIsLoading(false)
  }, [])

  const value: LoadingContextType = {
    isLoading,
    show: onShow,
    close: onClose,
  }
  return <LoadingContext.Provider value={value}>
    {isLoading ? <div className={styles.LoadingProvider}><LoadingIndicator /></div> : null}
    {children}
  </LoadingContext.Provider>
}
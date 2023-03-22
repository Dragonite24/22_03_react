import { FC, useEffect } from "react";
import { useFetch } from "shader/hooks/useFetch";
import { Contacts } from "components/Contacts";

import styles from './styles.module.scss';

export const Home: FC = () => {
  const { customFetch, isLoading, data } = useFetch({ url: 'https://reqres.in/api/users?delay=2' });

  useEffect(() => {
    customFetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className={styles.Home}>
    <Contacts list={data?.data} isLoading={isLoading} />
  </div>
}
import { UserType } from 'models/userType';
import { FC, useCallback } from 'react';
import { Button } from 'ui-kit/Button';
import { ContactBar } from './components/ContactBar';

import styles from './styles.module.scss';

type Props = {
  list: UserType[] | undefined;
  isLoading: boolean;
}

export const Contacts: FC<Props> = ({ isLoading, list }) => {
  const onInvite = useCallback(() => {
    alert('yo');
  }, []);

  return <div className={styles.Contacts}>
    <div className={styles.Contacts_search}></div>
    {isLoading ? <div>LOADING</div> : <div className={styles.Contacts_list}>
      {list?.map((el) => (<ContactBar key={el.id} contact={el} />))}
    </div>}

    <div className={styles.Contacts_buttons}>
      <Button title='Cancel' onClick={onInvite} type='outlined' />
      <Button title='Invite' onClick={onInvite} />
    </div>
  </div>
}


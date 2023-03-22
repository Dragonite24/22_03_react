import { UserType } from "models/userType";
import { FC } from "react";

import styles from './styles.module.scss';


type Props = {
  contact: UserType;
}

export const ContactBar: FC<Props> = ({ contact }) => {
  return <div className={styles.ContactBar}>
    <img src={contact.avatar} alt={contact.id.toString()} />
    <div className={styles.ContactBar_content}>
      <span className={styles.ContactBar_text}>{contact.last_name}</span>
      <span className={styles.ContactBar_text}>{contact.first_name}</span>
      <span className={styles.ContactBar_text}>{contact.email}</span>
    </div>
  </div>
}
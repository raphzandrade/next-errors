import styles from './my-app-my-lib.module.css';

/* eslint-disable-next-line */
export interface MyAppMyLibProps {}

export function MyAppMyLib(props: MyAppMyLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyAppMyLib!</h1>

      <ul>
        <li>
            test
        </li>
      </ul>

    </div>
  );
}

export default MyAppMyLib;

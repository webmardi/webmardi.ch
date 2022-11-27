import React from 'react';
import clsx from 'clsx';

import styles from './Blank.module.css';

type Props = {
  name: string;
};

const Blank = ({ name }: Props): JSX.Element => {
  const greeting = 'Hello';

  return (
    <div className={clsx(styles.default)}>
      {greeting} {name}
    </div>
  );
};

export default Blank;

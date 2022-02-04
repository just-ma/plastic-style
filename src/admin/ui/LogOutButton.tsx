import React, { useCallback } from 'react';
import { useHistory } from 'react-router';
import Auth from '@aws-amplify/auth';

import { STORAGE_USER_ACCESS_TOKEN } from '../models/constants';
import { adminLoginPath } from '../routes';

export default function LogOutButton(): React.ReactElement {
  const history = useHistory();

  const onLogOut = useCallback(async (): Promise<void> => {
    await Auth.signOut();
    localStorage.removeItem(STORAGE_USER_ACCESS_TOKEN);
    history.push(adminLoginPath());
  }, []);

  return <button onClick={onLogOut}>LOG OUT</button>;
}

import { useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router';
import Auth from '@aws-amplify/auth';

import { STORAGE_USER_ACCESS_TOKEN } from '../models/constants';
import { adminLoginPath, adminPath } from '../routes';

type HookOptions = {
  skip?: boolean;
};

type HookValue = {
  refetch: () => Promise<void>;
  loading: boolean;
};

export default function useCheckAuth(options?: HookOptions): HookValue {
  const { skip } = options || {};

  const history = useHistory();

  const [loading, setLoading] = useState(!skip);

  const checkAuth = async (): Promise<void> => {
    setLoading(true);
    const res = await Auth.currentCredentials();
    setLoading(false);

    if (!res.accessKeyId) {
      localStorage.removeItem(STORAGE_USER_ACCESS_TOKEN);
      history.replace(adminLoginPath());
      return;
    }

    const session = await Auth.currentSession();
    const token = session.getIdToken().getJwtToken();
    localStorage.setItem(STORAGE_USER_ACCESS_TOKEN, token);

    if (history.location.pathname === adminLoginPath()) {
      history.replace(adminPath());
    }
  };

  useEffect((): void => {
    if (skip) {
      return;
    }

    checkAuth();
  }, [skip]);

  return useMemo(
    (): HookValue => ({
      refetch: checkAuth,
      loading,
    }),
    [loading],
  );
}

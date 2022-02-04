import React, { useCallback } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import Auth from '@aws-amplify/auth';

import useCheckAuth from './hooks/useCheckAuth';
import { STORAGE_USER_ACCESS_TOKEN } from './models/constants';
import { adminLoginPath } from './routes';

const Container = styled.div``;

function Admin(): React.ReactElement | null {
  const history = useHistory();

  const { loading } = useCheckAuth();

  const onLogOut = useCallback(async (): Promise<void> => {
    await Auth.signOut();
    localStorage.removeItem(STORAGE_USER_ACCESS_TOKEN);
    history.push(adminLoginPath());
  }, []);

  if (loading) {
    return null;
  }

  return (
    <Container>
      <button onClick={onLogOut}>LOG OUT</button>
    </Container>
  );
}

export default Admin;

import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Auth from '@aws-amplify/auth';
import { withAuthenticator } from '@aws-amplify/ui-react';

import { STORAGE_USER_ACCESS_TOKEN } from '../models/constants';
import useCheckAuth from '../hooks/useCheckAuth';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 200px;
  padding: 50px;
  margin: 0 auto;
`;

const Field = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

const ErrorMessage = styled.div`
  color: red;
`;

function AdminLogin(): React.ReactElement | null {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const { refetch, loading } = useCheckAuth();

  const onUsernameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value);
    setError(null);
  }, []);

  const onPasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
    setError(null);
  }, []);

  const onSubmit = async (): Promise<void> => {
    try {
      const user = await Auth.signIn(username, password);
      const token = user?.signInUserSession?.accessToken?.jwtToken;
      if (token) {
        localStorage.setItem(STORAGE_USER_ACCESS_TOKEN, token);
        refetch();
      }
    } catch (e) {
      setError(String(e));
    }
  };

  if (loading) {
    return null;
  }

  return (
    <Container>
      <Field>
        <span>username</span>
        <input type="text" value={username} onChange={onUsernameChange}></input>
      </Field>
      <Field>
        <span>password</span>
        <input type="text" value={password} onChange={onPasswordChange}></input>
      </Field>
      <button onClick={onSubmit}>SUBMIT</button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
}

// export default AdminLogin;
export default withAuthenticator(AdminLogin);

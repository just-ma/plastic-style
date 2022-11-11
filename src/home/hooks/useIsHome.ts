import { useLocation } from 'react-router-dom';

export default function useIsHome(): boolean {
  const location = useLocation();

  return location.pathname === '/';
}

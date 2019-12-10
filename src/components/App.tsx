import React, { useRef, useState } from 'react';
import useAsyncEffect from 'use-async-effect';
import styled from 'styled-components';

import GlobalStyles from '../styles/global';

import StatBar from './StatBar';

const StyledApp = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1 1 auto;
  justify-content: flex-end;
`;

const App: React.FC = () => {
  const interval = useRef<any>();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState();

  const fetchStats = async () => {
    const response = await fetch('http://localhost:3101/stats').then(res => res.json());
    setStats(response);
  };

  useAsyncEffect(async () => {
    await fetchStats();
    setLoading(false);

    interval.current = setInterval(fetchStats, 500);
    return () => clearInterval(interval.current);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <StatBar {...stats} />
      </StyledApp>
    </>
  );
};

export default App;

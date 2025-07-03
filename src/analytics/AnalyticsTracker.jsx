import React, { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router'
import { logPageView } from './analytics';

const AnalyticsTracker = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

useEffect(() => {
    logPageView(location.pathname);
}, [location, navigationType]);

return null;

}

export default AnalyticsTracker

import {PublicRoutes} from 'routes';
import {DrawerLayout} from 'layouts';
import React from 'react';
import {useAuth} from 'hooks';

export default function Router() {
  const {isAuthenticated} = useAuth(state => state);
  return <>{isAuthenticated ? <DrawerLayout /> : <PublicRoutes />}</>;
}

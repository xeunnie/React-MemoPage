import { BrowserRouter, Route, Routes as BaseRoutes } from 'react-router-dom';

import Account from 'src/pages/Account';
import AccountManage from 'src/pages/AccountManage';
import Home from 'src/pages/Home';
import NotFound from 'src/pages/NotFound';

export default function Routes() {
  return (
    <BrowserRouter>
      <BaseRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/accountmanage" element={<AccountManage />} />
        <Route path="*" element={<NotFound />} />
      </BaseRoutes>
    </BrowserRouter>
  );
}

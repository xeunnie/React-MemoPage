import { BrowserRouter, Route, Routes as BaseRoutes } from 'react-router-dom';

import HomePage from 'src/MyPageProject/pages/HomePage';
import MEMO from 'src/MyPageProject/pages/MEMO';
import PhotoDashboard from 'src/MyPageProject/pages/PhotoDashBoard';

export default function Routes() {
  return (
    <BrowserRouter>
      <BaseRoutes>
        <Route path="/memo" element={<MEMO />} />
        <Route path="/photodashboard" element={<PhotoDashboard />} />
        <Route path="/" element={<HomePage />} />
      </BaseRoutes>
    </BrowserRouter>
  );
}

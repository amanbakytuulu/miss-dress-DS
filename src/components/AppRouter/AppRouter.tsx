import React, { FC, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "../../routes/routes";
import { ERROR_PAGE } from "../../utils/path";

const AppRouter: FC = () => {
  const isAuth = false;
  return (
    <Routes>
      {isAuth &&
        PRIVATE_ROUTES.map(({ path, Component }) => (
          <Route path={path} element={Component} key={path} />
        ))}
      {PUBLIC_ROUTES.map(({ path, Component }) => (
        <Route path={path} element={Component} key={path} />
      ))}
      <Route path="*" element={<Navigate to={ERROR_PAGE} replace />} />
    </Routes>
  );
};

export default AppRouter;
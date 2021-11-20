import React from 'react';
import {
  ToastContainer
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import s from './ToastWrapper.module.css';

export const ToastWrapper = () => {
  return (
    <ToastContainer
      autoClose={5000}
      limit={3}
      position="top-center"
      className={s.notificationContainer}
      bodyClassName={s.toastBody}
      toastClassName={s.notification}
      pauseOnHover
      closeOnClick={false}
      pauseOnFocusLoss
    />
  );
};

export const toastContent = (
  children,
) => {

  return (
    <>
      {children}
    </>
  );
};

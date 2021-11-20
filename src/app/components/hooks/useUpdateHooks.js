import { useCallback, useRef } from 'react';
import { toast } from 'react-toastify';
import { toastContent } from '../atoms/ToastWrapper';

export default function useUpdateToast() {
  const toastIdRef = useRef();

  return useCallback(
    ({
      type, render, progress, autoClose = 5000, ...restOptions
    }) => {
      const creationFn = type && type !== 'default' ? toast[type] : toast;

      const contentRender = toastContent(render);

      if (toastIdRef.current && toast.isActive(toastIdRef.current)) {
        toast.update(toastIdRef.current, {
          render: contentRender,
          type,
          progress,
          autoClose,
          ...restOptions,
        });
      } else {
        toastIdRef.current = creationFn(contentRender);
      }
    },
    [],
  );
}

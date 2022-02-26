import { useEffect, useReducer } from 'react';

import { api } from '@/lib/axios';
interface ITypes {
  data: any[];
  isloading: boolean;
  error: null | string;
  path: string;
}

export function usePromisses() {
  const [values, dispatch] = useReducer(
    (values: ITypes, dispatch) => {
      switch (dispatch.type) {
        case 'pathIncluded':
          return {
            ...values,
            path: dispatch.path,
            isloading: true,
          };

        case 'onError':
          return {
            ...values,
            data: [],
            isloading: false,
            error: dispatch.errorMessage,
            path: '',
          };
        case 'onSuccess':
          return {
            ...values,
            data: dispatch.data,
            isloading: false,
            error: null,
            path: '',
          };

        default:
          return values;
      }
    },
    {
      data: [],
      isloading: true,
      error: null,
      path: '',
    },
  );
  useEffect(() => {
    if (!values.path) {
      return;
    }

    api(values.path)
      .then(({ data: { data } }) => {
        dispatch({ type: 'onSuccess', data: data });
      })
      .catch(({ message }) => {
        dispatch({ type: 'onError', errorMessage: message });
      });
  }, [values.path]);

  function setPath(path: string) {
    dispatch({ type: 'pathIncluded', path: path });
  }

  const { data, isloading, error } = values;
  return { isloading, error, data, setPath };
}

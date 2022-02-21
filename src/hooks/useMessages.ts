import { useToast } from '@chakra-ui/react';

interface ISetObjectOptions {
  title?: string;
  description: string;
  status: 'info' | 'warning' | 'success' | 'error' | undefined;
}

interface IUseMessages {
  setOptions: ({ title, description, status }: ISetObjectOptions) => void;
}

export function useMessages(): IUseMessages {
  const toast = useToast();
  const setOptions = ({ title, description, status }: ISetObjectOptions) => {
    toast({
      title,
      description,
      status,
      position: 'top',
      isClosable: true,
    });
  };

  return {
    setOptions,
  };
}

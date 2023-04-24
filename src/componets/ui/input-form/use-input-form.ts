import { useRouter } from 'next/router';
import React, { useState } from 'react';

const useInputForm: () => {
  handlePasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  password: string;
  handleFormSubmit: () => void;
  handleEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  email: string;
} = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const router = useRouter();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = () => {
    if (email === '' || password === '') {
      console.log('Дані не валідні!');
      return;
    }
    router.push('/movies-page');
  };

  return { handleEmailChange, handlePasswordChange, handleFormSubmit, email, password };
};
export default useInputForm;

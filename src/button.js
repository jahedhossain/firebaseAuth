import { useGoogleLogin } from '@react-oauth/google';
import React from 'react';

function Button() {
  const login = useGoogleLogin({
    ux_mode: "redirect",
    onSuccess: (codeResponse) => {

      alert('success', codeResponse)
    },
    onError: (error) =>{
     alert('error', error)
    },
  });
  return (
    <div>
      <button onClick={(() => {
        login()
      })}>Login</button>
    </div>
  )
}

export default Button
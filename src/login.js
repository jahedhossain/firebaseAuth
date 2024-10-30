import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Button from "./button";
function Login() {
  return (
    <div>
      <GoogleOAuthProvider
        clientId="84061756105-rnhbfv4t9dnmmaege9m48ttljtkbu0v3.apps.googleusercontent.com"
        onScriptLoadError={(erorr) => {
        alert("Error loading Google OAuth script: " + erorr);
        }}
        onScriptLoadSuccess={() => {
        alert("Google OAuth script loaded successfully");
        }}
      >
        <Button />
      </GoogleOAuthProvider>
    </div>
  );
}

export default Login;

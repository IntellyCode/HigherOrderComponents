import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUpForm from '@Main/RegisterForm';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <SignUpForm 
      formColors={{
        bg: "light",
        color: "text-black",
        borderColor: "border-white",
        boxShadow: "shadow",
        rounded: "rounded-3",
        btn: "primary"
      }}
      elementSpacing={{
        m:"2",
        p:"2"
      }}
      formSettings={{
        action:"https://google.com",
        method:"POST",
        onSubmit: (event:React.FormEvent) => {
          event.preventDefault();
        }
      }} />
    </React.StrictMode>
  );
}

import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

function App() {
  const [form, setForm] = useState('signup');  // Initially show the sign-up form

  const handleSwitchForm = (formType) => {
    setForm(formType);
  };

  return (
    <div className="App">
      {form === 'signup' ? (
        <SignUpForm onSwitchForm={handleSwitchForm} />
      ) : (
        <LoginForm onSwitchForm={handleSwitchForm} />
      )}
    </div>
  );
}

export default App;

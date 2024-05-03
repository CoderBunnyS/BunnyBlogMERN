import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserGreeting = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated && user ? (
        <h1>Hello, {user.name || 'Guest'}</h1>  // Displays user name, or 'Guest' if name is not available
      ) : (
        <h1>Welcome to my blog!</h1>  // Display when the user is not logged in
      )}
    </div>
  );
};

export default UserGreeting;

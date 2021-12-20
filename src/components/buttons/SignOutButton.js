import React from 'react';
import { signOutUser } from '../../api/auth';

export default function SignOutButton() {
  return (
    <button
      type="button"
      className="sign-btn btn btn-outline-light"
      onClick={signOutUser}
    >
      <i className="fas fa-sign-out-alt" />
    </button>
  );
}

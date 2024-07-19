"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs";
import React from "react";

function Header() {
  const { user } = useUser();
  return (
    <div>
      {user && (
        <h1>
          {user.firstName}
          {`'s`} Space
        </h1>
      )}

      {/* Breadcrumbs */}
      <div>
        {/* If User is signed out this the SignedOut component is rendered otherwise SignedIn component is rendered. */}
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default Header;

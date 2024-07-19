"use client";
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
    </div>
  );
}

export default Header;

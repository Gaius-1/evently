'use client';

import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useUser } from "@clerk/nextjs";

const NavItems = () => {
  const { user } = useUser();
  const pathname = usePathname();

  // Replace with the actual array of allowed email addresses
  const allowedEmailsArray = ["agbofrederick56@gmail.com", "user2@example.com"];

  // Extract the primary email address from user.primaryEmailAddress
  const primaryEmail = user?.primaryEmailAddress?.emailAddress;

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-9 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;

        // Check if the link is 'Create Event' and the user email is in the allowed array
        const isCreateEventVisible =
          link.label !== "Orders" || (primaryEmail && allowedEmailsArray.includes(primaryEmail));
          
        return (
          isCreateEventVisible && (
          <li key={link.route} className={`${ isActive && 'text-primary-500' } flex-center p-medium-16 whitespace-nowrap`}>
            <Link href={link.route}>{link.label}</Link>
          </li>
        ));
      })}
    </ul>
  );
};

export default NavItems;
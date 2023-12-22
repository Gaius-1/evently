'use client'

import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react';

export const ProfileClient = () => {
  const { user } = useUser();
  const [userEmail, setUserEmail] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Fetch user data and set the email
    const fetchUserData = async () => {
      setUserEmail(user?.primaryEmailAddress?.emailAddress);
    };

    fetchUserData();
  }, [user]);

  return { userEmail };
};
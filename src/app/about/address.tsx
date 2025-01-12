'use client';
import { useEffect, useState } from 'react';

interface ObfuscatedEmailProps {
  user: string;
  domain: string;
  tld: string;
}

export default function ObfuscatedEmail(
  { user, domain, tld }: ObfuscatedEmailProps,
) {
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    setEmail(`${user}@${domain}.${tld}`);
  }, [user, domain, tld]);

  if (!email) return null; // Prevent rendering until the email is set

  return (
    <a href={`mailto:${email}`} aria-label='Email address'>
      {email}
    </a>
  );
}

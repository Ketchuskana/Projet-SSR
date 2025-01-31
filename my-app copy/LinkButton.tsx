import Link from 'next/link';
import { ReactNode } from 'react';

interface LinkButtonProps {
  pageRoute: string;
  children: ReactNode;
}

export default function LinkButton({ pageRoute, children }: LinkButtonProps) {
  return <Link href={pageRoute}>{children}</Link>;
}
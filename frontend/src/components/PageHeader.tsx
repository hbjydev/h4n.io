import * as React from 'react';

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  bottomGap?: boolean;
  leftAlign?: boolean;
};

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, bottomGap, leftAlign }) => {
  const st = subtitle ? (<span className="text-zinc-600">{subtitle}</span>) : null;

  return (
    <div className={`flex w-full flex-col ${leftAlign ? 'items-start' : 'items-center'} gap-y-4 ${bottomGap ? 'mb-6' : ''}`}>
      <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
      {st}
    </div>
  );
}

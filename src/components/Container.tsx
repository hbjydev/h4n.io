import React from 'react';
import type { HTMLAttributes } from 'react';

export type ContainerProps = HTMLAttributes<HTMLDivElement>;

export const Container: React.FC<ContainerProps> = ({
  className,
  ...props
}) => {
  const classes = `max-w-screen-xl mx-auto w-full ${className}`;

  return (
    <div
      className={classes}
      {...props}
    >
      {props.children}
    </div>
  );
};

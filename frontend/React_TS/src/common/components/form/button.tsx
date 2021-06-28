import * as React from 'react';

interface Props {
  label: string;
  className: string;
  onClick: () => void;
}

export const Button: React.FunctionComponent<Props> = (props) => {

  return (
    <button type="button"
      className={props.className}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

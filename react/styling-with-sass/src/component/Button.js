import React from "react";
import classNames from "classnames";

import "./Button.scss";

// size: large, medium, small
// color: blue, pink, gray
function Button({ children, size, color, outline, fullwidth, ...rest }) {
  return (
    <button
      className={classNames("Button", size, color, { outline, fullwidth })}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "blue",
};

export default Button;

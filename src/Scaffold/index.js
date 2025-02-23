import React from "react";
import withStyles from "../withStyles";
import classNames from "classnames";

import Label from "../Label";
import Validation from "../Validation";

type Props = {
  children: any,
  classes: Object,
  className: string,
  error: string,
  id: string,
  label: string,
  theme: Object,
  type: string,
};

const Scaffold = ({
  children,
  classes,
  className,
  error,
  id,
  label,
  theme,
  type,
  ...rest
}: Props) => (
  <div className={classNames(classes.root, className)} {...rest}>
    {label && <Label htmlFor={id}>{label}</Label>}
    {children}
    {error && <Validation error={error} />}
  </div>
);

const styles = () => ({
  root: {
    position: "relative",
    width: "100%",
    margin: "8px auto 16px",
  },
});

export default withStyles(styles, { name: "EuiScaffold" })(Scaffold);

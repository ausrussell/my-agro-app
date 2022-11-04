import "./mysteryComponent.css";


interface IMysteryComponent {
  children?: JSX.Element | JSX.Element[] | string;
  styleType?: "primary" | "secondary";
  icon?: JSX.Element | string;
  iconPos?: "left" | "right";
  onClick?: () => {};
  size?: "small" | "large" | "icon";
  className?: string;
  disable?: boolean;
}

const MysteryComponent = ({
  children,
  styleType,
  icon,
  size,
  iconPos,
  className,
  disable,
  ...props
}: IMysteryComponent): JSX.Element => {
  const types =
    styleType &&
    (styleType === "primary" ? "mystery__primary" : "mystery_secondary");
  const iconStyle = icon && "mystery--icon";
  const raws = icon ? (
    iconPos === "right" ? (
      <>
        {children} {icon}
      </>
    ) : (
      <>
        {icon} {children}
      </>
    )
  ) : (
    children
  );
  const disabled = disable ? "disabled-mystery" : "";
  return (
    <button
      className={[
        "default__mystery",
        types,
        iconStyle,
        `mystery-size--${size}`,
        disabled,
        className,
      ].join(" ")}
      {...props}
      disabled={disable}
    >
      {raws}
    </button>
  );
};

export default MysteryComponent;

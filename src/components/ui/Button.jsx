export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-body text-sm font-semibold uppercase tracking-wide px-8 py-4 transition-colors duration-300";

  const variants = {
    primary: "bg-charcoal text-ivory hover:bg-charcoal/90",
    secondary: "border border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory",
    ghost: "text-charcoal underline-offset-4 hover:underline",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
export function Button({
  onClick,
  variant = "outline",
  className = "",
  children,
}) {
  const baseStyles =
    "font-semibold transition rounded-full  px-6 py-3 border border-[#0274b3]";
  const variants = {
    outline: "hover:bg-white bg-none text-[#0274b3]",
    solid: "hover:bg-[#005582] bg-[#0274b3] text-white",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

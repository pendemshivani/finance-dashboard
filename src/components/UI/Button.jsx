const Button = ({ children, onClick, type = "button", variant = "primary" }) => {
  const base = "px-4 py-2 rounded-lg font-medium transition";

  const styles = {
    primary: "bg-indigo-500 text-white hover:bg-indigo-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    secondary: "bg-gray-200 hover:bg-gray-300",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
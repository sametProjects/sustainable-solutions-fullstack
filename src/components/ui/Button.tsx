import { ButtonProps } from "@/types";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
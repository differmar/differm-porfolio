"use client";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  url?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

const Button = ({ label, onClick, url, variant = "primary", className = "" }: ButtonProps) => {
  const baseStyles = "text-[#F2F2F2] text-sm font-bold border border-[#F2F2F2] px-4 py-2 rounded-lg transition-colors duration-300";
  const variantStyles = variant === "primary" 
    ? "hover:bg-[#F2F2F2] hover:text-[#262626]"
    : "";

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;

"use client";

interface TextProps {
  children: React.ReactNode;
  variant?: "body" | "label" | "caption";
  className?: string;
}

const Text = ({ children, variant = "body", className = "" }: TextProps) => {
  const variantStyles = {
    body: "text-[#F2F2F2]",
    label: "text-[#BFBFBF] text-lg sm:text-xl font-medium",
    caption: "text-[#F2F2F2] text-sm opacity-80",
  };

  return (
    <span className={`${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Text;

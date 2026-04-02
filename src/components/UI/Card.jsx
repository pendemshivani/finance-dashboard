const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white/80 backdrop-blur-lg p-5 rounded-2xl shadow-md ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
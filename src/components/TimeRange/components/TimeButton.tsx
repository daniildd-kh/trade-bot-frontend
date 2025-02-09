interface TimeButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const TimeButton: React.FC<TimeButtonProps> = ({ label, active, onClick }) => {
  return (
    <button
      className={`min-w-[60px] py-[5px] transition-all border rounded-[20px] text-[10px] font-bold text-center flex items-center justify-center
        ${active ? "border-white text-white" : "border-gray text-gray"}
      `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default TimeButton;

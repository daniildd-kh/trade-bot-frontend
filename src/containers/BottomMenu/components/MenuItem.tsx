import React from "react";
import Icon from "../../../components/Icon/Icon";

interface MenuItemProps {
  src: string;
  label: string;
  isSelected: boolean;
  onSelect: () => void;
  notifications?: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ src, label, isSelected, onSelect, notifications }) => {
  return (
    <div className="relative flex flex-col items-center gap-[3px] cursor-pointer" onClick={onSelect}>
      <Icon src={src} label={label} width={6} height={6} />
      <span className={`text-[10px] transition-colors ${isSelected ? "text-white" : "text-gray-400"}`}>
        {label}
      </span>
      
      {notifications && (
        <span className="absolute top-[-6px] right-[-4px] bg-[#FB9819] text-white text-[10px] font-bold rounded-full w-[17px] h-[17px] flex items-center justify-center">
          {notifications}
        </span>
      )}
    </div>
  );
};

export default MenuItem;

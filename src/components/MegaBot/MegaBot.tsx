import React from "react";
import Icon from "../Icon/Icon";
import megaBotIcon from "../../assets/megabot.png";
import energyLeft from '../../assets/energy-left.png';
import energyLeftUp from '../../assets/energy-left-up.png';
import energyRight from '../../assets/energy-right.png';
import energyRightTop from '../../assets/energy-right-up.png'

interface MegaBotProps {
  profit: number;
}

const MegaBot = ({ profit }: MegaBotProps) => {
  const profitColor = profit < 0 ? "text-[#ED427C]" : "text-[#579D52]";

  return (
    <div className="relative bg-[#1D283F] w-[33%] h-[105px] flex flex-col items-center justify-center rounded-l">
      
      <img
        src={energyLeftUp}
        alt="Energy Left Up"
        className="absolute top-[-20px] left-[-30px] w-[50px] rotate-[-1deg]"
      />

      <img
        src={energyRightTop}
        alt="Energy Right Up"
        className="absolute top-[-20px] right-[-25px] w-[50px] rotate-[-1deg]"
      />

      <img
        src={energyLeft}
        alt="Energy Left"
        className="absolute left-[-30px] top-[50px] w-[50px]"
      />

      <img
        src={energyRight}
        alt="Energy Right"
        className="absolute right-[-30px] top-[50px] w-[50px]"
      />


      <div className="flex flex-col items-center gap-[5px] mb-[10px]">
        <Icon label="megabot" src={megaBotIcon} width={11} height={12} />
        <div className="flex flex-col text-center">
          <h4 className="text-[10px] text-white uppercase leading-none max-w-[60px]">
            MegaBot
          </h4>
          <span className={`text-[10px] leading-none ${profitColor}`}>
            {profit >= 0 ? `+${profit}%` : `${profit}%`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MegaBot;

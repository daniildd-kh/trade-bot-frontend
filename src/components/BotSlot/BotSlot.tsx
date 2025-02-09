import React from "react";
import placeBot from "../../assets/noBot.png";
import Icon from "../Icon/Icon";
import megaBotIcon from "../../assets/megabot.png";
import energyLeft from "../../assets/energy-left.png";
import energyLeftUp from "../../assets/energy-left-up.png";
import energyRight from "../../assets/energy-right.png";
import energyRightTop from "../../assets/energy-right-up.png";

interface BotSlotProps {
  botName?: string;
  botSrc?: string;
  profit?: number;
  isSelected?: boolean;
  onSelect: () => void;
  isMegaBot?: boolean;
}

const BotSlot = ({ 
  botName, botSrc, profit, isSelected, onSelect, isMegaBot 
}:BotSlotProps) => {
  const profitColor = profit !== undefined && profit < 0 ? "text-[#ED427C]" : "text-[#579D52]";
  const isPlaceBot = !botSrc && !isMegaBot;
  const containerStyles = `relative w-[33%] h-[105px] flex justify-center items-center rounded-l cursor-pointer transition-all 
    ${isSelected ? "bg-[#1B3149]" : "bg-[#1D283F]"}`;

  return (
    <div className={containerStyles} onClick={onSelect}>
      {isMegaBot && (
        <>
          <img src={energyLeftUp} alt="Energy Left Up" className="absolute top-[-20px] left-[-30px] w-[50px] rotate-[-1deg] z-10" />
          <img src={energyRightTop} alt="Energy Right Up" className="absolute top-[-20px] right-[-25px] w-[50px] rotate-[-1deg] z-10" />
          <img src={energyLeft} alt="Energy Left" className="absolute left-[-30px] top-[50px] w-[50px] z-10" />
          <img src={energyRight} alt="Energy Right" className="absolute right-[-30px] top-[50px] w-[50px] z-10" />
        </>
      )}

      <div className="flex flex-col items-center h-auto gap-[10px]">
        <Icon
          label={botName ?? "bot"}
          src={isMegaBot ? megaBotIcon : isPlaceBot ? placeBot : botSrc ?? ""}
          width={11}
          height={isMegaBot ? 12 : 8}
        />
        <div className="flex flex-col text-center">
          <h4 className="text-[10px] text-white uppercase leading-none max-w-[60px]">
            {isMegaBot ? "MegaBot" : isPlaceBot ? "Place Bot Here" : botName}
          </h4>
          {profit !== undefined && (
            <span className={`text-[10px] leading-none ${profitColor}`}>
              {profit >= 0 ? `+${profit}%` : `${profit}%`}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default BotSlot;

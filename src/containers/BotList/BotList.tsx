// src/containers/BotList/BotList.tsx
import React from "react";
import BotSlot from "../../components/BotSlot/BotSlot";
import { BotType } from "../../App";

// Импорт изображений для ботов
import yellowBotImg from "../../assets/yellow_bot.png";
import whiteBotImg from "../../assets/white_bot.png";
import greenBotImg from "../../assets/green_bot.png";
import redBotImg from "../../assets/red_bot.png";
import blueBotImg from "../../assets/blue_bot.png";
import orangeBotImg from "../../assets/orange_bot.png";

interface BotListProps {
  bots: BotType[];
  timeRange: string;
  selectedBot: number | null;
  onBotSelect: (selectedBotIndex: number, botName: string) => void;
}

const getProfitForTimeRange = (bot: BotType, timeRange: string): number => {
  switch (timeRange) {
    case "24h":
      return bot["24h"];
    case "7 days":
      return bot["7d"];
    case "30 days":
      return bot["30d"];
    case "All time":
      return bot["all_time"];
    default:
      return bot["24h"];
  }
};

const getBotImage = (name: string): string => {
  if (name === "yellow_bot") return yellowBotImg;
  switch (name) {
    case "white_bot":
      return whiteBotImg;
    case "green_bot":
      return greenBotImg;
    case "red_bot":
      return redBotImg;
    case "blue_bot":
      return blueBotImg;
    case "orange_bot":
      return orangeBotImg;
    default:
      return "";
  }
};

const BotList = ({ bots, timeRange, selectedBot, onBotSelect }:BotListProps) => {
  return (
    <div className="flex gap-[1px] flex-wrap pt-[5px]">
      {bots.map((bot, index) => (
        <BotSlot
          key={index}
          botName={bot.name}
          profit={getProfitForTimeRange(bot, timeRange)}
          botSrc={getBotImage(bot.name)}
          isSelected={selectedBot === index}
          onSelect={() => onBotSelect(index, bot.name)}
          isMegaBot={bot.name === "yellow_bot"}
        />
      ))}
    </div>
  );
};

export default BotList;

import React, { useState } from "react";
import BotSlot from "../../components/BotSlot/BotSlot";
import attackOrangeBot from "../../assets/attack-orange.png";
import balanceBot from "../../assets/balance.png";
import defenceBot from "../../assets/defence.png";
import attackRedBot from "../../assets/attack-red.png";
import MegaBot from "../../components/MegaBot/MegaBot";

const bots = [
  { id: 1, botName: "attack", profit: -8.2, botSrc: attackOrangeBot },
  { id: 2, botName: "" },
  { id: 3, botName: "balance", profit: -3.7, botSrc: defenceBot },
  { id: 4, botName: "defence", profit: 2.5, botSrc: defenceBot },
  { id: 5, isMegaBot: true, profit: 3.6, },
  { id: 6, botName: "attack", profit: 13.7, botSrc: attackRedBot },
];

const BotList = () => {
  const [selectedBot, setSelectedBot] = useState<number | null>(null);

  return (
    <div className="flex gap-[1px] flex-wrap pt-[5px]">
      {bots.map(({ id, botName, profit, botSrc, isMegaBot }) => (
        <BotSlot
          key={id}
          botName={botName}
          profit={profit}
          botSrc={botSrc}
          isMegaBot={isMegaBot}
          isSelected={selectedBot === id}
          onSelect={() => setSelectedBot(id)}
        />
      ))}
    </div>
  );
};

export default BotList;

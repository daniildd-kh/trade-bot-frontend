import { useState } from "react";
import DashboardIcon from "../../assets/dashboard.png";
import MegaBot from "../../assets/megabot-menu.png";
import BotMarket from "../../assets/market.png";
import CoinPrices from "../../assets/coin.png";
import Profile from "../../assets/profile.png";
import MenuItem from "./components/MenuItem";

const menuItems = [
  { label: "Dashboard", src: DashboardIcon },
  { label: "Megabot", src: MegaBot },
  { label: "Bot Market", src: BotMarket },
  { label: "Coin Prices", src: CoinPrices },
  { label: "Profile", src: Profile, notifications: 3 },
];

const BottomMenu = () => {
  const [selected, setSelected] = useState<string>("Dashboard");

  return (
    <div className="flex justify-between bg-[#19293B] pl-[10px] pr-[20px] py-[3px] w-full">
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          label={item.label}
          src={item.src}
          isSelected={selected === item.label}
          onSelect={() => setSelected(item.label)}
          notifications={item.notifications}
        />
      ))}
    </div>
  );
};

export default BottomMenu;

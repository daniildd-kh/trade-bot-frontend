import Balance from "./components/Balance";
import { CurrencyVariant, StatusProps } from "./types";

const titleStyle = "font-bold text-[12px] uppercase text-gray";
const currencyStyle = "font-bold text-[12px] text-white flex gap-[5px]";

const Stats = ({
  capital,
  balance = 0,
  onHold = 0,
  currencyVariant = CurrencyVariant.ETH,
}: StatusProps) => {
  return (
    <div className="flex justify-between pt-[3px]">
      <div className="flex flex-col">
        <h3 className={titleStyle}>Trading capital</h3>
        {capital && (
          <span className={`${currencyStyle} text-[34px] font-thin leading-none`}>
            {capital} {currencyVariant}
          </span>
        )}
      </div>
      <div className="flex flex-col pt-[18px]">
        <Balance label="Balance" amount={balance} />
        <Balance label="On hold" amount={onHold} />
      </div>
    </div>
  );
};

export default Stats;

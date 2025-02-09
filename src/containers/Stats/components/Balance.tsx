import Icon from "../../../components/Icon/Icon";
import coinIcon from "../../../assets/currency.png";

interface BalanceProps {
  label: string;
  amount: number;
}

const titleStyle = "text-[12px] uppercase text-gray";
const numberStyle = "font-bold text-[12px] text-white";
const containerStyle = "flex items-center gap-[5px] justify-end min-w-[70px]";

const formatNumber = (num: number) => {
  return new Intl.NumberFormat("ru-RU").format(num);
};

const Balance = ({ label, amount }: BalanceProps) => {
  return (
    <div className="flex justify-between items-center w-full">
      <h3 className={titleStyle}>{label}:</h3>
      <div className={containerStyle}>
        <span className={numberStyle}>{formatNumber(amount)}</span>
        <Icon label="coin" src={coinIcon} width={4} height={4} />
      </div>
    </div>
  );
};

export default Balance;

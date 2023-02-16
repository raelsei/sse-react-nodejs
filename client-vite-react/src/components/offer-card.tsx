import cn from 'classnames'
type OfferCardProps = {
  name: string;
  uid: string;
  totalPayment: number;
  monthlyPayment: number;
  interestRate: number;
  logo: string;
  type: string;
  isSelected?: boolean;
};

export const OfferCard = ({
  name,
  uid: id,
  totalPayment,
  monthlyPayment,
  interestRate,
  logo,
  type,
  isSelected,
}: OfferCardProps) => {
  return (
    <div
      className={
       cn( "relative transition duration-300 bg-blue-100 shadow-xl shadow-gray-100 w-full max-w-4xl flex flex-col sm:flex-row gap-3 sm:items-center  justify-between px-5 py-4 rounded-md" ,
        isSelected && "border-4 border-orange-500/70" )
      }
    >
    {isSelected &&  <span className='absolute text-3xl -top-4 right-1/2 transform -translate-x-1/2'>🥳</span>}
      <div>
        <span className="text-blue-800 text-xs">{type.toUpperCase()}</span>
        <img className="h-5 my-4 object-cover" src={logo} />
        {/* <h3 className="font-bold mt-px">{name}</h3> */}
        <div className="flex items-center gap-3 mt-2">
          <span className="bg-blue-200 text-blue-700 rounded-full px-3 py-1 text-sm">
            Total:{" "}
            {Number(totalPayment).toLocaleString("en-US", {
              style: "currency",
              currency: "TRY",
            })}
          </span>
          <span className="bg-blue-200 text-blue-700 rounded-full px-3 py-1 text-sm">
            Monthly:{" "}
            {Number(monthlyPayment).toLocaleString("en-US", {
              style: "currency",
              currency: "TRY",
            })}
          </span>

          <span className="bg-blue-200 text-blue-700 rounded-full px-3 py-1 text-sm">
            Interest:{" "}
            {Number(interestRate / 100).toLocaleString("en-US", {
              style: "percent",
              minimumFractionDigits: 1,
              maximumFractionDigits: 2,
            })}
          </span>
        </div>
      </div>
      <div>
        <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center">
          Apply Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

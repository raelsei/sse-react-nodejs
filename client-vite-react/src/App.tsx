import { useState } from "react";
import { OfferCard } from "./components/offer-card";
import { Loading } from "./components/loading";

function App() {
  const [offersSync, setOffersSync] = useState([]);
  const [syncLoading, setSyncLoading] = useState(false);
  const [offersAsync, setOffersAsync] = useState([]);
  const [asyncLoading, setAsyncLoading] = useState(false);

  const getOffersSynch = async () => {
    setOffersSync([]);
    setSyncLoading(true);
    const response = await fetch("http://localhost:8080/api/offers");
    const offers = await response.json();
    setOffersSync(offers);
    setSyncLoading(false);
    console.log('test')
  };

  const getOffersAsync = async () => {
    setOffersAsync([]);
    setAsyncLoading(true);

    const sse = new EventSource("http://localhost:8080/api/offers/stream");
    sse.onmessage = (event) => {
      const offers = JSON.parse(event.data);

      setOffersAsync(offers.sort((a, b) => a.totalPayment - b.totalPayment));

      if (offers.length === 7) {
        sse.close();
        setAsyncLoading(false);
      }
    };

    sse.onerror = (error) => {
      console.log(error);
      sse.close();
      setAsyncLoading(false);
    };
  };

  const handleGetOffers = async () => {
    getOffersSynch();
    getOffersAsync();
  };


  return (
    <div className="flex w-screen gap-4 min-h-screen">
      <div className="w-full bg-green-50 p-4 relative">
        <span
          onClick={handleGetOffers}
          className="absolute text-3xl -right-5 hover:scale-125 transition duration-200 top-10 rounded-full cursor-pointer"
        >
          🚀
        </span>
        <div className="flex flex-row-reverse items-center gap-4">
          <div
            className="button w-40 h-16 bg-blue-500 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
    border-b-[1px] border-blue-400
  "
            onClick={getOffersSynch}
          >
            <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg">
              Get Offers <span className="text-sm">Sync</span>
            </span>
          </div>
          {syncLoading && <Loading />}
        </div>

        <div className="flex flex-col gap-2 mt-8">
          {offersSync.map((offer, i) => (
            <OfferCard
              isSelected={i === 0}
              {...(offer as any)}
              key={offer?.uid}
            />
          ))}
        </div>
      </div>

      <div className="w-full bg-red-50 p-4">
        <div className="flex items-center gap-4">
          <div
            className="button w-40 h-16 bg-blue-500 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
    border-b-[1px] border-blue-400
  "
            onClick={getOffersAsync}
          >
            <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg">
              Get Offers <span className="text-sm">Async</span>
            </span>
          </div>
          {asyncLoading && <Loading />}
        </div>

        <div className="flex flex-col gap-2 mt-8">
          {offersAsync.map((offer, i) => (
            <OfferCard isSelected={i === 0} {...(offer as any)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

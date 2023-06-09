import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';



function CheckoutButton({ enabled}) {
  const router = useRouter();
  const [data, setData] = useState(null);
  // const [amount, setamount] = useState(null);

  const [status, setStatus] = useState('');
  const [bestSell, setBestSell] = useState('');
  const { order_id } = router.query;
  const { amount } = router.query;

  



  useEffect(() => {
    const fetchData = async () => {
      let success = false;
      while (!success) {
        try {
          const response = await fetch('https://api.nobitex.ir/market/stats?srcCurrency=sol&dstCurrency=rls');
          const json = await response.json();
          setData(json);
          setStatus(json.status);
          setBestSell(json.stats['sol-rls'].bestSell);
          success = true; // If we made it here without any errors, set success to true and exit the loop.
        } catch (error) {
          console.log(error); // Log the error for debugging purposes.
          await new Promise(resolve => setTimeout(resolve, 500)); // Wait for 5 seconds before retrying.
        }
      }
    };
  
    fetchData();
  }, []);


  if (!data) {
    return <div>Loading...</div>;
  }

  function handleClick() {
    router.push(`/checkout?order_id=${order_id}&amount=${((amount/bestSell)*10).toFixed(5)}`);
  }

  return (
    <div className='flex flex-col items-center'>
    <p className='text-gray-600 text-sm my-2'>
      solona price is {bestSell} Rials
    </p>
    <button onClick={handleClick}
    className="items-center px-20 rounded-md py-2 max-w-fit self-center bg-gray-900 text-white hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!enabled}>
      Checkout {(amount/bestSell).toFixed(5)*10} Solona {order_id}
    </button>
    </div>
  );
}

export default CheckoutButton;
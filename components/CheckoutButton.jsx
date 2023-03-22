import { useRouter } from 'next/router';

function CheckoutButton({ amount ,enabled}) {
  const router = useRouter();

  function handleClick() {
    router.push(`/checkout?amount=${amount}`);
  }

  return (
    
    <button onClick={handleClick}
    className="items-center px-20 rounded-md py-2 max-w-fit self-center bg-gray-900 text-white hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!enabled}>
      Checkout ${amount}
    </button>
  );
}

export default CheckoutButton;
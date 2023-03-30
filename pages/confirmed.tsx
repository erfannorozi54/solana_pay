import BackLink from '../components/BackLink';
import Confirmed from '../components/Confirmed';
import PageHeading from '../components/PageHeading';
import { useRouter } from "next/router";

export default function ConfirmedPage() {
  const router = useRouter();
  const { signature, order_id } = router.query;
  const url = `https://porovv.com/testr?order_id=${order_id}&signature=${signature}&payment_status=success`;

  return (
    <div className='flex flex-col gap-8 items-center'>
      <BackLink href={url}>Home</BackLink>

      <PageHeading>Thankyou, enjoy your cookies!</PageHeading>

      <div className='h-80 w-80'><Confirmed /></div>
    </div>
  )
}

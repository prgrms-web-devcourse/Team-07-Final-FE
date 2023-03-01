import { Grid } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

import getCakeList from '../Api/getCakeList';
import CakeItem from './cakeItem';
import CakeListSkeleton from './cakeListSkeleton';

export default function CakeList({ category, location }: any) {
  const { status, data } = useQuery(
    ['전체 케이크 리스트', category, location],
    () =>
      getCakeList({
        location,
        category,
      })
  );

  if (status === 'loading') {
    return <CakeListSkeleton />;
  }

  return (
    <Grid padding={0} gap={4} flexDirection="column">
      {data?.map((item: any) => (
        <Link key={item.orderId} href={`/orders/${item.orderId}`}>
          <CakeItem
            orderId={item.orderId}
            title={item.title}
            category={item.cakeInfo.cakeCategory}
            cakeSize={item.cakeInfo.cakeSize}
            image={item.cakeImage}
            price={item.hopePrice}
            status={item.orderStatus}
            visitTime={item.visitTime}
          />
        </Link>
      ))}
    </Grid>
  );
}

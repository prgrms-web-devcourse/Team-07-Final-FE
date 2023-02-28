import { Container, Divider, Flex, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/router';

import getMarketDetail from '../Api/getMarketDetail';
import {
  MarketAddressIcon,
  MarketInfoIcon,
  MarketOpeningIcon,
  MarketTelIcon,
} from './icon';
import MarketProfileSkeleton from './marketProfileSkeleton';
import MarketTitle from './marketTitle';

export default function MarketProfile() {
  const router = useRouter();
  const { status, data } = useQuery([router.query.id], () =>
    getMarketDetail({ enrollmentId: router.query.id })
  );

  if (status === 'loading' || !router.isReady) {
    return <MarketProfileSkeleton />;
  }

  const address = `${data.address.city} ${data.address.district} ${data.address.detailAddress}`;
  const openingHours = `${data.openTime} ~ ${data.endTime}`;

  return (
    <>
      <MarketTitle title={data.marketName} />
      <Container centerContent gap={5} padding={4}>
        <Image src={data.marketImage} alt="로고" width={240} height={240} />
        <Container padding={0}>
          <Flex align="center" gap={2}>
            <MarketInfoIcon w={7} h={7} />
            <Text color="hey.main" fontWeight={800} fontSize="xl">
              업체 소개
            </Text>
          </Flex>
          <Text padding={2}>{data.description}</Text>
        </Container>
        <Divider borderColor="hey.main" />
        <Container padding={0}>
          <Flex align="center" gap={2}>
            <MarketAddressIcon w={8} h={8} />
            <Text color="hey.main" fontWeight={800} fontSize="xl">
              주소
            </Text>
          </Flex>
          <Text padding={2}>{address}</Text>
        </Container>
        <Divider borderColor="hey.main" />
        <Container padding={0}>
          <Flex align="center" gap={2}>
            <MarketTelIcon w={7} h={7} />
            <Text color="hey.main" fontWeight={800} fontSize="xl">
              전화번호
            </Text>
          </Flex>
          <Text padding={2}>{data.phoneNumber}</Text>
        </Container>
        <Divider borderColor="hey.main" />
        <Container padding={0}>
          <Flex align="center" gap={2}>
            <MarketOpeningIcon w={7} h={7} />
            <Text color="hey.main" fontWeight={800} fontSize="xl">
              영업시간
            </Text>
          </Flex>
          <Text padding={2}>{openingHours}</Text>
        </Container>
        <Divider borderColor="hey.main" />
      </Container>
    </>
  );
}

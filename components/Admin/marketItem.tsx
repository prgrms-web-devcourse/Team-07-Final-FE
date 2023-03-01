import {
  Box,
  Button,
  Card,
  CardBody,
  CloseButton,
  Divider,
  Flex,
  Grid,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

export default function MarketItem({
  category,
  enrollmentId,
  marketImage,
  marketName,
  businessNumber,
  status,
}: any) {
  const onRejectClickHandler = () => {
    console.log('거절', enrollmentId);
  };

  const onApproveClickHandler = () => {
    console.log('승인', enrollmentId);
  };

  return (
    <Card
      borderColor="hey.sub"
      borderWidth="2px"
      bgColor="orange.50"
      direction="row"
      variant="outline"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box p={2} borderRadius="12px">
        <Link key={enrollmentId} href={`/market/${enrollmentId}`}>
          <Image width={100} height={100} src={marketImage} alt="Cake" />
        </Link>
      </Box>
      <CardBody px={2}>
        <Link key={enrollmentId} href={`/market/${enrollmentId}`}>
          <Flex padding={0} gap={3} flexDirection="column">
            <Flex align="center" gap={4} justifyContent="space-between">
              <Text>{marketName}</Text>
            </Flex>
            <Divider borderColor="hey.main" />
            <Flex align="center" gap={4} justifyContent="space-between">
              <Text fontWeight="600">{businessNumber}</Text>
            </Flex>
          </Flex>
        </Link>
      </CardBody>
      {category !== 'DELETE' ? (
        <Box px={2}>
          <Grid my={2} gap={10} justifyItems="flex-end">
            <CloseButton
              bgColor="red.500"
              color="white"
              onClick={onRejectClickHandler}
            />
            {status === 'APPROVE' ? (
              <Button onClick={onApproveClickHandler}>승인</Button>
            ) : (
              <Button>승인됨</Button>
            )}
          </Grid>
        </Box>
      ) : (
        <Box />
      )}
    </Card>
  );
}

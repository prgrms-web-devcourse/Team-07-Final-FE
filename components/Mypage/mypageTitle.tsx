/* eslint-disable react/prop-types */
import { Container, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { AiOutlineLeft } from 'react-icons/ai';

import { IMypageTitle } from './types';

export default function MypageTitle({ title }: IMypageTitle) {
  const router = useRouter();

  return (
    <Container display="flex" paddingTop={12}>
      <AiOutlineLeft fontSize={30} onClick={router.back} />
      <Text
        fontSize={18}
        marginLeft="6.2rem"
        fontWeight="700"
        paddingBottom="1rem"
        alignItems="center"
      >
        {title}
      </Text>
    </Container>
  );
}

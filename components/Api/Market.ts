import { internalApi } from '.';

export default async function getMarketDetail({ enrollmentId }: any) {
  try {
    const response = await internalApi.get(
      `/api/enrollments/${enrollmentId}`,
      {}
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return console.error(error);
  }
  return console.error('마켓 상세 정보를 받아오는데 에러가 발생했습니다');
}

export async function getMarketList({ cursor, category }: any) {
  try {
    const response = await internalApi.post(`/api/enrollments`, {
      cursor,
      category,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return console.error(error);
  }
  return console.error('마켓 승인 리스트를 받아오는데 에러가 발생했습니다');
}
export async function patchMarketStatus({ status, enrollmentId }: any) {
  try {
    const response = await internalApi.patch(`/api/marketstatus`, {
      status,
      enrollmentId,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return console.error(error);
  }
  return console.error('마켓 상태 변경에 문제가 발생했습니다');
}

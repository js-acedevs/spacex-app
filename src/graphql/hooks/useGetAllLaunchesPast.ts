// router
import { useRouter } from 'next/router';

// graphql
import { useGetAllLaunchesPastQuery, useGetAllLaunchesPastResultQuery } from '@graphql/gen/graphql';

// utils
import { getOffset } from '@utils/index';

// types
interface GetAllLaunchesPastProps {
  limit?: number;
}

const useGetAllLaunchesPast = ({ limit = 10 }: GetAllLaunchesPastProps) => {
  // custom hook
  const { query } = useRouter();

  // const
  const offset = getOffset({ currentNumber: Number(query?.page?.toString() || 1), limit });

  // graphql hooks
  const { data, loading, error } = useGetAllLaunchesPastQuery({
    variables: { limit, offset, missionName: query?.search?.toString() || '' },
  });

  const { data: resultData } = useGetAllLaunchesPastResultQuery({
    variables: { missionName: query?.search?.toString() || '' },
  });

  return {
    error,
    loading,
    result: data?.launchesPast,
    total: resultData?.launchesPastResult?.result?.totalCount || 0,
  };
};

export default useGetAllLaunchesPast;

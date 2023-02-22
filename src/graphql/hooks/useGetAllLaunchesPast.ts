// next
import { useRouter } from 'next/router';

// graphql
import useDebounce from '@hooks/useDebounce';
import { useGetAllLaunchesPastQuery, useGetAllLaunchesPastResultQuery } from '@graphql/gen/graphql';

// hooks

// utils
import { getOffset } from '@utils/index';

// types
interface GetAllLaunchesPastProps {
  limit?: number;
}

const useGetAllLaunchesPast = ({ limit = 20 }: GetAllLaunchesPastProps) => {
  // custom hook
  const { query } = useRouter();

  const debouncedValue = useDebounce(query?.search?.toString() || '', 500);

  // const
  const offset = getOffset({ currentNumber: Number(query?.page?.toString() || 1), limit });

  // graphql hooks
  const { data, loading, error } = useGetAllLaunchesPastQuery({
    variables: { limit, offset, missionName: debouncedValue },
  });

  const { data: resultData } = useGetAllLaunchesPastResultQuery({
    variables: { missionName: debouncedValue },
  });

  return {
    error,
    loading,
    result: data?.launchesPast,
    total: resultData?.launchesPastResult?.result?.totalCount || 0,
  };
};

export default useGetAllLaunchesPast;

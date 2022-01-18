// graphql
import { useGetLaunchByIdQuery } from '@graphql/gen/graphql';

const useGetLaunchById = ({ launchId }: { launchId: string }) => {
  // graphql hooks
  const { data, loading, error } = useGetLaunchByIdQuery({
    variables: { launchId },
  });

  return {
    error,
    loading,
    id: data?.launch?.id,
    result: data?.launch,
  };
};

export default useGetLaunchById;

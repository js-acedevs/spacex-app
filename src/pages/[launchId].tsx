// react
import { useEffect } from 'react';

// next
import { useRouter } from 'next/router';
import { NextPage } from 'next/types';

// mui
import { Container } from '@mui/material';

// config
import { APP_URL } from '@config/index';

// atoms
import { If } from '@atoms/index';

// molecules
import { RocketView } from '@molecules/index';

// templates
import { PageLayout } from '@templates/index';

// graphql
import useGetLaunchById from '@graphql/hooks/useGetLaunchById';

const RocketPage: NextPage = () => {
  // hook
  const {
    push,
    route,
    query: { launchId },
  } = useRouter();

  // graphql hook
  const { id, result, loading } = useGetLaunchById({
    launchId: launchId?.toString() || '',
  });

  // const
  const flickrImages = Array.isArray(result?.links?.flickrImages)
    ? result?.links?.flickrImages[0]?.toString()
    : '';

  useEffect(() => {
    if (!result && !loading) {
      push('/');
    }
  }, [loading, push, result]);

  return (
    <PageLayout
      title={result?.rocket?.rocket?.name || ''}
      url={`${APP_URL}${route.replace('[jobSlug]', id || '')}`}
      image={flickrImages}
      description={
        result?.rocket?.rocket?.description?.split('.')[0] ||
        result?.rocket?.rocket?.description?.slice(0, 100) ||
        ''
      }
    >
      <Container maxWidth="lg">
        <If condition={!!result?.rocket}>
          <RocketView
            missionName={result?.missionName || ''}
            rocket={result?.rocket?.rocket || null}
            flickrImages={flickrImages || result?.links?.missionPatchSmall || ''}
          />
        </If>
      </Container>
    </PageLayout>
  );
};

export default RocketPage;

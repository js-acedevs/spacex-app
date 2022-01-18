// graphql
import { RocketFragment } from '@graphql/gen/graphql';

export interface RocketViewProps {
  flickrImages: string;
  missionName: string;
  rocket: RocketFragment | null;
}

// types
type GetOffsetProps = Record<'currentNumber' | 'limit', number>;

export const getOffset = ({ currentNumber, limit }: GetOffsetProps): number =>
  currentNumber !== 0 ? Math.abs((currentNumber - 1) * limit) : 0;

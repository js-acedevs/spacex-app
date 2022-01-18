// react
import React, { FC, ChangeEvent, useState, useEffect } from 'react';

// next
import { useRouter } from 'next/router';

// mui
import { Stack, Pagination as MuiPagination, PaginationProps } from '@mui/material';

// query string
import queryString from 'query-string';

const Pagination: FC<PaginationProps> = ({ count, ...rest }) => {
  // hooks
  const { push, query } = useRouter();

  // local state
  const [currentPage, setCurrentPage] = useState<number>(query?.page ? Number(query?.page) : 1);

  // handlers
  const handleSetParams = (page: number) =>
    push({ search: `${queryString.stringify({ ...query, page })}` }, undefined, {
      scroll: false,
    });

  const handleOnChange = (_: ChangeEvent<unknown>, page: number) => {
    handleSetParams(page);
    setCurrentPage(page);
  };

  // effect
  useEffect(() => {
    setCurrentPage(query?.page ? Number(query?.page) : 1);
  }, [query?.page]);

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      sx={{ mt: 2, mb: 4 }}
    >
      <MuiPagination onChange={handleOnChange} page={currentPage} count={count} {...rest} />
    </Stack>
  );
};

export default Pagination;

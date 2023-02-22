// react
import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';

// next
import { useRouter } from 'next/router';

// mui
import CloseIcon from '@mui/icons-material/Close';
import { Paper, InputBase, IconButton } from '@mui/material';

// query string
import queryString from 'query-string';

// atoms
import { If } from '@atoms/index';

// types
import { SearchFieldProps } from './SearchField.props';

// styled
import { paperStyle } from './SearchField.styled';

const SearchField: FC<SearchFieldProps> = ({ ...rest }) => {
  // local state
  const [value, setValue] = useState<string>('');

  // hooks
  const { push, query } = useRouter();

  // handlers
  const handleSetParams = useCallback(
    (search: string) =>
      push({ search: `${queryString.stringify({ ...query, search, page: 1 })}` }, undefined, {
        scroll: false,
      }),
    [push, query]
  );

  const handleClearSearch = () => {
    handleSetParams('');
    setValue('');
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target?.value === '') {
      handleClearSearch();
    } else {
      setValue(event.target.value.trim());
      handleSetParams(event.target.value.trim());
    }
  };

  useEffect(() => {
    if (query?.search && !value) {
      setValue(query?.search.toString().trim() || '');
    }
  }, [query?.search, value]);

  return (
    <Paper sx={paperStyle} {...rest}>
      <InputBase
        value={value}
        placeholder="Search..."
        sx={{ ml: 1, flex: 1 }}
        onChange={handleOnChange}
        inputProps={{ 'aria-label': 'search launches' }}
      />

      <If condition={!!value}>
        <IconButton onClick={handleClearSearch} sx={{ p: '4px' }} aria-label="clear search">
          <CloseIcon sx={{ height: '20px', width: '20px' }} />
        </IconButton>
      </If>
    </Paper>
  );
};

export default SearchField;

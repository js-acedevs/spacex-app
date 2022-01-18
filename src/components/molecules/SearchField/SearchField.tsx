// react
import { ChangeEvent, FC, KeyboardEvent, useCallback, useEffect, useState } from 'react';

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
  const [typing, setTyping] = useState<boolean>(false);

  // hooks
  const { push, query } = useRouter();

  // handlers
  const handleSetParams = useCallback(
    (search: string) =>
      push({ search: `${queryString.stringify({ ...query, search })}` }, undefined, {
        scroll: false,
      }),
    [push, query]
  );

  const handleKeyEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') handleSetParams(value);
    typing && setTyping(!typing);
  };

  const handleClearSearch = () => {
    handleSetParams('');
    setValue('');
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value.trim());
    !typing && setTyping(!typing);
    if (event.target?.value === '') handleClearSearch();
  };

  // effect
  useEffect(() => {
    if (query?.search && !typing) {
      setValue(query?.search.toString().trim());
    }
  }, [typing, query]);

  return (
    <Paper sx={paperStyle} {...rest}>
      <InputBase
        value={value}
        placeholder="Search..."
        sx={{ ml: 1, flex: 1 }}
        onChange={handleOnChange}
        onKeyPress={handleKeyEnter}
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

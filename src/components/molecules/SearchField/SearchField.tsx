// react
import { FC, KeyboardEvent, useEffect } from 'react';

// next
import { useRouter } from 'next/router';

// mui
import CloseIcon from '@mui/icons-material/Close';
import { Paper, InputBase, IconButton } from '@mui/material';

// query string
import queryString from 'query-string';

// hooks
import { useInput } from '@hooks/useInput';

// atoms
import { If } from '@atoms/index';

// types
import { SearchFieldProps } from './SearchField.props';

// styled
import { paperStyle } from './SearchField.styled';

const SearchField: FC<SearchFieldProps> = ({ ...rest }) => {
  // hooks
  const { push, query } = useRouter();
  const { value, typing, handleOnChange, handleSetValue, handleSetTyping } = useInput();

  // handlers
  const handleSetParams = (search: string) =>
    push({ search: `${queryString.stringify({ ...query, search })}` }, undefined, {
      scroll: false,
    });

  const handleKeyEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') handleSetParams(value);
    typing && handleSetTyping(!typing);
  };

  const handleClearSearch = () => {
    handleSetParams('');
    handleSetValue('');
  };

  // effect
  useEffect(() => {
    if (query?.search && !typing) {
      handleSetValue(query?.search.toString().trim());
    }
  }, [typing, query?.search, handleSetValue]);

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

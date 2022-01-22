import { TextInput } from 'react-native';
import styled from 'styled-components';

const SearchInput = styled(TextInput)`
  background-color: ${({ theme }) => theme.backgroundColorSecondary};
  color: ${({ theme }) => theme.textColorPrimary};
  margin: 4px 16px;
  padding: 6px 8px;
  border-radius: 6px;
  font-size: 16px;
  line-height: 18px;
`;

export default SearchInput;

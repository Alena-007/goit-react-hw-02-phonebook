import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ filter, onChange }) => (
  <FilterLabel>
    Find contacts by name
    <FilterInput type="text" name="filter" value={filter} onChange={onChange} />
  </FilterLabel>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

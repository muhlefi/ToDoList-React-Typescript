import { FC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../reduxtoolkit/store';
import { filterTodos, markAllCompleted } from '../../../dataservices/Todo/actions';
import FilterButtonsView from './FilterButtons.view';
import { FilterType } from './FilterButtons.types';

const FilterButtons: FC = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state: RootState) => state.todos.filter as FilterType);

  const handleFilterChange = (value: FilterType) => {
    dispatch(filterTodos(value));
  };

  const handleMarkAllCompleted = () => {
    dispatch(markAllCompleted());
  };

  return (
    <FilterButtonsView
      currentFilter={currentFilter}
      onFilterChange={handleFilterChange}
      onMarkAllCompleted={handleMarkAllCompleted}
    />
  );
};

export default memo(FilterButtons);


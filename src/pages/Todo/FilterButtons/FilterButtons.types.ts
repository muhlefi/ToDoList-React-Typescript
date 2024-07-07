// src/components/filterbuttons/types.ts

export type FilterType = 'ALL' | 'COMPLETED' | 'INCOMPLETE';

export interface FilterButtonsViewProps {
    currentFilter: FilterType;
    onFilterChange: (value: FilterType) => void;
    onMarkAllCompleted: () => void;
  }
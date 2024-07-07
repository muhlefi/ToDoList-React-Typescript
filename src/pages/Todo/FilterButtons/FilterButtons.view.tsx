import { FC, memo } from "react";
import { Flex, Select, Button } from "@radix-ui/themes";
import { FilterType, FilterButtonsViewProps } from "./FilterButtons.types";

const FilterButtonsView: FC<FilterButtonsViewProps> = ({ currentFilter, onFilterChange, onMarkAllCompleted }) => (
  <Flex align="center" gap="3">
    <Select.Root value={currentFilter} onValueChange={(value) => onFilterChange(value as FilterType)}>
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          <Select.Item value="ALL">Default</Select.Item>
          <Select.Item value="COMPLETED">Completed</Select.Item>
          <Select.Item value="INCOMPLETE">Incomplete</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>

    <Button className="text-sm" onClick={onMarkAllCompleted}>
      Mark All Completed
    </Button>
  </Flex>
);

export default memo(FilterButtonsView);

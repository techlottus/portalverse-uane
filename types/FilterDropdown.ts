export type OptionDropdownItem = {
  value: string;
  active: boolean;
  label: string;
};

export type FilterDropdownConfig = {
  label: string;
  icon?: string;
};

type FilterDropdownComponentData = {
  data: {
    config: FilterDropdownConfig;
    options: OptionDropdownItem[];
  };
  onSelectedOptions: (options: string[]) => void;
  clear?: boolean;
};

export default FilterDropdownComponentData
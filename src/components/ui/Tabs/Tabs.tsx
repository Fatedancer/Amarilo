import Tab, { TabProps } from "./Tab";

  type TabsProps = {
    id: string;
    tabs: Pick<TabProps, 'value' | 'label' >[];
    selected: string;
    onClick: (value: string) => void;
  };
  
  const Tabs = ({
    id,
    tabs,
    selected,
    onClick,
  }: TabsProps): JSX.Element => (
    <div
    id={`tabs-${id}`}
    data-testid={`tabs-${id}`}
    className='w-full flex items-end'
  >
    {tabs.map((tab, i) => (
      <Tab
        {...tab}
        key={`tab-${i}`}
        selected={selected === tab.value}
        onClick={onClick}
      />
    ))}
  </div>
  );
  
  export default Tabs;
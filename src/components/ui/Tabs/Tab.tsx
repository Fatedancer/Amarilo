import { cn } from "@/lib/utils";

export type TabProps = {
  label: string;
  value: string;
  onClick: (value: string) => void;
  selected: boolean;
};

const Tab = ({ label, onClick, value, selected }: TabProps) => {

  return (
    <div
      className={cn(
        'w-full h-14 p-4 rounded-t-lg font-regular text-body-s text-center truncate text-ellipsis transition duration-100 flex justify-center items-center',
        {
          'bg-yellow-pastel text-blue-persa border-b-2 border-yellow': selected,
          'bg-yellow-pastel text-black': !selected,
          'hover:bg-secondary-pastel active:bg-blue-persa-pastel active:text-primary cursor-pointer': !selected,
        }
      )}
      onClick={() => onClick(value)}
    >
      {label}
    </div>
  );
}

export default Tab
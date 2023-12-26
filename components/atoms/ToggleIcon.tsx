import Stack from "./Stack";

const ToggleIcon = () => {
  return (
    <Stack className="gap-[2px] lg:gap-[3px] w-full">
      <div className="bg-gray-900 w-full h-[1px] lg:h-[2px]" />
      <div className="bg-gray-900 w-full h-[4px] lg:h-[6px]" />
      <div className="bg-gray-900 w-full h-[1px] lg:h-[2px]" />
    </Stack>
  );
};

export default ToggleIcon;

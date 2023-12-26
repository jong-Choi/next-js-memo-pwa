import Stack from "./Stack";

const ToggleIcon = () => {
  return (
    <Stack className="gap-[2px] w-full">
      <div className="bg-gray-900 w-full h-[1px]" />
      <div className="bg-gray-900 w-full h-[5px]" />
      <div className="bg-gray-900 w-full h-[1px]" />
    </Stack>
  );
};

export default ToggleIcon;

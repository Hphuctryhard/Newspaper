export const NewItems = () => {
  return (
    <div className="flex flex-col justify-between ml-[20px] space-y-5">
      <div className="flex flex-row justify-start text-[12px]">
        <p> author | </p>
        <p> date </p>
      </div>
      <p className="text-[20px] leading-[26px] "> Title of newspaper</p>
      <div className="flex flex-row justify-start text-[12px]">
        <p> Category | </p>
        <p> Views </p>
      </div>
    </div>
  );
};

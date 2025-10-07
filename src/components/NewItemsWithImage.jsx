export const NewItemsWithImage = () => {
  return (
    <div className="flex flex-row w-full h-[134px]">
      <img className="w-[130px] h-[134px]"></img>
      <div className="flex flex-col justify-between ml-[20px] py-1 ">
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
    </div>
  );
};

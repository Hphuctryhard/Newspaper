export default function VideoItem({children}) {   
return (
    <div className="flex flex-row space-x-[20px] ">
      {children}
      <div className="flex flex-col text-left ">
        <p className="mb-2.5">Tiltle of vid </p>
        <p>Description of vid </p>
      </div>
    </div>
  );
}
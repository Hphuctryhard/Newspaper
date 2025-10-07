export default function NewsItemsInVertical() {
  return (
    <div className="flex flex-col w-[316px] h-[549px] space-y-[20px]">
      <div className="aspect-[2/3] overflow-hidden rounded-xl">
        <img src="/img.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      <p>Article of newspaper</p>
      <p>Description</p>
      <p> Author &nbsp;&nbsp;&nbsp; &nbsp;| &nbsp; &nbsp; time of Update</p>
    </div>
  );
}

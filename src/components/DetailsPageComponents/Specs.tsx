import ImageGallery from "react-image-gallery";

export interface ISliderImages {
  original: string;
  thumbnail: string;
}

const Specs = () => {
  const images: ISliderImages[] = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <div className="w-[80vw] m-auto flex mt-4">
      <div className="flex flex-col w-[65%]">
        <h1 className="font-work text-2xl font-bold mb-3">
          Sold-Custom-Painted 2004 Chevrolet SSR Convertible Pickup
        </h1>
        <div className="min-h-[60vh]">
          {/* <img src="/assets/minivan.jpg" alt="van" /> */}
          <ImageGallery
            showFullscreenButton={true}
            infinite={true}
            showPlayButton={true}
            showBullets={true}
            showThumbnails={true}
            showNav={true}
            items={images}
          />
        </div>
      </div>
      <div className="flex flex-col w-[35%] pl-6 pt-6 ">
        <span className="font-work text-lg self-center bg-slate-100 w-full text-center text-blue-900 font-bold border-blue-100 rounded-sm cursor-pointer border p-1">
          Add to Watchlist
        </span>
        <div className="border mt-3 h-auto p-2 bg-slate-100 border-blue-100 w-full">
          <span className="text-gray-500 font-bold">SOLD</span>
          <br />
          <span className="text-3xl text-green-700 font-bold">$22,000</span>
          <br />
          <span className="text-gray-500">Inclusive of buyer's fees</span>
          <br />
          <span className="text-gray-500 font-bold">Sold Date</span>
          <br />
          <span>Saturday, Oct 15th, 12:32am</span>
          <br />
          <span className="text-gray-500 font-bold ">WATCHING</span>
          <br />
          <span>116</span>
          <br />
          <p className="text-center underline  text-green-800 text-sm">
            <span className="cursor-pointer">Frequently Asked Questions</span>
          </p>
        </div>
        <div className="w-full p-4 border border-blue-100 rounded-bl-sm rounded-br-sm border-t-0 ">
          <p className="font-work text-lg self-center bg-slate-100 w-full text-center text-blue-900 font-bold border-blue-100 rounded-sm cursor-pointer border p-1">
            Contact Seller
          </p>
        </div>
      </div>
    </div>
  );
};

export default Specs;

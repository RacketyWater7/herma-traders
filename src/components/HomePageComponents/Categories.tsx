import { ICategory } from "../../App";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type CategoryProps = {
  data: ICategory[];
};

const CustomLeftArrow = ({ onClick, ...rest }: any) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button
      onClick={() => onClick()}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 hover:bg-gray-100 rounded-full p-2 hover:scale-110 transition-all duration-200"
      disabled={currentSlide === 0}
    >
      <MdArrowBackIos
        color="black"
        style={{ width: "20px", height: "20px", color: "black" }}
      />
    </button>
  );
};

const CustomRightArrow = ({ onClick, ...rest }: any) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType, totalItems },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10  hover:bg-gray-100 rounded-full p-2 hover:scale-110 transition-all duration-200"
      onClick={() => onClick()}
      disabled={currentSlide === totalItems - 1}
    >
      <MdArrowForwardIos />
    </button>
  );
};

const Categories = (props: CategoryProps) => {
  const responsive: any = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
      partialVisibilityGutter: 30,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.5,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };
  return (
    <div className="m-4">
      <div className="flex items-center justify-center flex-col select-none">
        <h2 className="text-xl font-work">
          {props.data[0]?.name ? "Explore Categories" : "Explore Popular Makes"}
        </h2>
        <div className="border-b-2 m-2 border-t-0 border-l-0 border-r-0 w-60"></div>
      </div>

      <div className="w-full">
        {/* categories */}
        <Carousel
          // renderButtonGroupOutside={true}
          responsive={responsive}
          arrows={true}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
          swipeable
        >
          {props.data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-48 h-32 m-2 bg-[#f4f5f7] rounded-lg shadow-md hover:shadow-xl select-none cursor-pointer"
              >
                <div
                  className={
                    item.name
                      ? "w-20 h-20 bg-gray-200 rounded-full"
                      : "w-20 h-20"
                  }
                >
                  <img
                    className={
                      item.name
                        ? `w-20 h-20 bg-cover rounded-full`
                        : `w-20 h-20 bg-cover`
                    }
                    src={`${item.image_path}`}
                    alt={`${item.image_path}`}
                  />
                </div>
                {item.name && (
                  <h3 className="text-sm text-gray-700">{item.name}</h3>
                )}
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Categories;

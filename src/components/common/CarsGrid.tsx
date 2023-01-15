import { useNavigate } from "react-router-dom";

const CarsGrid = () => {
  const navigate = useNavigate();
  const carsData = [
    {
      id: "1",
      name: "BMW 3 Series",
      model: "2019",
      image_path: "/assets/cars/car1.jpg",
      price: "$100,000",
    },
    {
      id: "2",
      name: "BMW 5 Series",
      model: "2019",
      image_path: "/assets/cars/car2.jpg",
      price: "$670,000",
    },
    {
      id: "3",
      name: "Bugatti Chiron",
      model: "2019",
      image_path: "/assets/cars/car3.jpg",
      price: "$2,700,000",
    },
    {
      id: "4",
      name: "Cadillac Escalade",
      model: "2019",
      image_path: "/assets/cars/car4.jpg",
      price: "$100,000",
    },
    {
      id: "5",
      name: "Chevrolet Camaro",
      model: "2019",
      image_path: "/assets/cars/car5.jpg",
      price: "$432,000",
    },
    {
      id: "6",
      name: "Ferrari 488 GTB",
      model: "2019",
      image_path: "/assets/cars/car6.jpg",
      price: "$1,200,000",
    },
    {
      id: "7",
      name: "Ford Mustang",
      model: "2019",
      image_path: "/assets/cars/car1.jpg",
      price: "$100,000",
    },
    {
      id: "8",
      name: "Mercedes-Benz S-Class",
      model: "2019",
      image_path: "/assets/cars/car2.jpg",
      price: "$670,000",
    },
    {
      id: "9",
      name: "Pontiac Firebird",
      model: "2019",
      image_path: "/assets/cars/car3.jpg",
      price: "$2,700,000",
    },
    {
      id: "10",
      name: "Porsche 911",
      model: "2019",
      image_path: "/assets/cars/car4.jpg",
      price: "$100,000",
    },
  ];
  return (
    <div className="pl-5 pr-5 w-full mt-8 mb-8">
      <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 chromium:grid-cols-3 min-laptop:grid-cols-4 laptop:grid-cols-5 big-screen:grid-cols-6 gap-4 m-auto">
        {/* card */}
        {carsData.map((car) => {
          return (
            <div
              key={car.id}
              className="flex justify-center"
              onClick={() => navigate("/details")}
            >
              <div className="flex flex-col w-[279px] h-[314px] rounded-md shadow-md hover:shadow-xl cursor-pointer">
                <div className="w-[279px] h-[185px]">
                  <img
                    className="w-full h-auto bg-cover rounded-t-md"
                    src={`${car.image_path}`}
                    alt="car1.jpg"
                  />
                </div>
                <div className="flex flex-col w-full h-full p-4 pt-8">
                  <h3 className="font-work font-bold text-blue-900">
                    {car.model} {car.name}
                  </h3>
                  <h3 className="font-work">PRICE: </h3>
                  <h3 className="font-work font-bold">{car.price}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarsGrid;

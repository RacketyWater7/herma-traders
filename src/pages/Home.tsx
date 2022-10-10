import { Categories, Search } from "../components/HomePageComponents";
import { ICategory } from "../App";
import Tabs from "../components/HomePageComponents/Tabs";
import CarsGrid from "../components/common/CarsGrid";

const Home = () => {
  const categoryList: ICategory[] = [
    {
      id: "1",
      name: "Luxury",
      image_path: "/src/assets/luxury.png",
    },
    {
      id: "2",
      name: "Sports",
      image_path: "/src/assets/sports.jpg",
    },
    {
      id: "3",
      name: "Muscles",
      image_path: "/src/assets/muscles.webp",
    },
    {
      id: "4",
      name: "Motorbikes",
      image_path: "/src/assets/motorbike.jpg",
    },
    {
      id: "5",
      name: "SUVs",
      image_path: "/src/assets/suv.jpg",
    },
    {
      id: "6",
      name: "Minivan",
      image_path: "/src/assets/minivan.jpg",
    },
  ];
  const makesList: ICategory[] = [
    {
      id: "1",
      name: "",
      image_path: "/src/assets/makes/bmw.png",
    },
    // {
    //   id: "2",
    //   name: "",
    //   image_path: "/src/assets/makes/cadilac.webp",
    // },
    {
      id: "3",
      name: "",
      image_path: "/src/assets/makes/Chevrolet.png",
    },
    {
      id: "4",
      name: "",
      image_path: "/src/assets/makes/ferrari.png",
    },
    {
      id: "5",
      name: "",
      image_path: "/src/assets/makes/ford.png",
    },
    {
      id: "6",
      name: "",
      image_path: "/src/assets/makes/mercedes.png",
    },
    {
      id: "7",
      name: "",
      image_path: "/src/assets/makes/pontiac.png",
    },
    {
      id: "8",
      name: "",
      image_path: "/src/assets/makes/porsche.png",
    },
  ];
  return (
    <div className="h-auto min-h-screen">
      <Search />
      <Categories data={categoryList} />
      <Categories data={makesList} />
      <Tabs />
      <CarsGrid />
    </div>
  );
};

export default Home;

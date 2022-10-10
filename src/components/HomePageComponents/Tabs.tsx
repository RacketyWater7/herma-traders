import { Button } from "../common";

const Tabs = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col select-none">
        <h2 className="text-xl font-work">Browse</h2>
        <div className="border-b-2 m-2 border-t-0 border-l-0 border-r-0 w-60"></div>
      </div>
      <div className="flex flex-col tablet:flex-row justify-center items-center gap-3 mr-8 ml-8 mt-2 mb-4">
        <Button
          name="New Arrivals"
          type="primary"
          heightCustom={"40px"}
          width={0}
        />
        <Button
          name="Trending Cars"
          type="primary"
          heightCustom={"40px"}
          width={0}
        />
        <Button
          name="Premium Cars"
          type="primary"
          heightCustom={"40px"}
          width={0}
        />
      </div>
    </>
  );
};

export default Tabs;

import { Button } from "../common";

const Search = () => {
  return (
    <div
      className="p-10 pt-20 bg-[url(/assets/toyota.jpg)] w-full h-[600px] md:h-[400px] bg-cover bg-center
      "
    >
      {/* add a typography */}
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-4xl font-bold text-white ">Find your dream car</h1>
        {/* <input
            type="text"
            placeholder="Location"
            className="w-64 px-4 py-2 text-gray-700 bg-white rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          /> */}
      </div>

      <div className="flex gap-8 justify-center flex-col md:flex-row">
        <div className="mb-3 w-40">
          <select
            className="form-select appearance-none
            focus:ring-purple-600 focus:border-purple-600
            block
            w-44
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding bg-no-repeat
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:outline-none"
            aria-label="Default select example"
          >
            <option selected>Make</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="mb-3 w-40">
          <select
            className="form-select appearance-none
            focus:ring-purple-600 focus:border-purple-600
            block
            w-44
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding bg-no-repeat
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:outline-none"
            aria-label="Default select example"
          >
            <option selected>Model</option>
            <option value="1">2010</option>
            <option value="2">2011</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="mb-3 m">
          <select
            className="form-select appearance-none 
            focus:ring-purple-600 focus:border-purple-600
            lg:[position:relative]
            lg:[top:0]
            lg:[right:-15px]
            block
            w-32
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding bg-no-repeat
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:outline-none"
            aria-label="Default select example"
          >
            <option selected>year</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="mb-3 flex  sm:items-center gap-3 flex-col sm:flex-row">
          <span className="text-white">to</span>
          <select
            className="form-select appearance-none
            focus:ring-purple-600 focus:border-purple-600
            block
            w-32
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding bg-no-repeat
            border border-solid border-gray-300
            rounded
            transition
            
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:outline-none"
            aria-label="Default select example"
          >
            <option selected>Year</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        {/* <button className="w-32 h-[40px] px-4 py-2 text-white bg-purple-600 rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
          Search
        </button> */}
        <Button type="primary" name="Search" heightCustom="40px" width={32} />
      </div>
    </div>
  );
};

export default Search;

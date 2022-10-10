type ButtonProps = {
  type: string;
  name: string;
  width: number;
  heightCustom: string;
};

const Button = (props: ButtonProps) => {
  return (
    <>
      {props.type === "primary" ? (
        <button
          type="button"
          className={`inline-block max-w-[280px] px-6 py-2.5 font-bold ${
            props.width === 0 ? "" : `w-${props.width}`
          } h-[${
            props.heightCustom
          }] bg-purple-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out`}
        >
          {props.name}
        </button>
      ) : (
        <button
          type="button"
          className={`inline-block max-w-[280px] px-6 py-2.5 font-bold ${
            props.width === 0 ? "" : `w-${props.width}`
          } h-[${
            props.heightCustom
          }] bg-blue-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out`}
        >
          {props.name}
        </button>
      )}
    </>
  );
};

export default Button;

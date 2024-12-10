import { IoMdRemoveCircleOutline } from "react-icons/io";

export default function StringInput({ fieldID, onRemove }) {
  return (
    <div className="flex justify-center items-center gap-2 w-[55em] h-[2.5em]">
      <input
        placeholder="Valid String"
        className="transition-all rounded-md w-full h-full bg-transparent outline outline-offset-2 outline-gray-500 outline-2 hover:outline-gray-300 focus:outline-gray-300 p-2 text-2xl font-mono"
      />
      <button>
        <IoMdRemoveCircleOutline
          className="transition-all w-full h-[3em] fill-red-900 hover:fill-red-600"
          onClick={() => onRemove(fieldID)}
        />
      </button>
    </div>
  );
}

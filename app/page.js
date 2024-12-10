"use client";

import StringInput from "./input";
import { BsQuestionSquare } from "react-icons/bs";
import { MdContentCopy } from "react-icons/md";
import { IoIosArrowDropdown, IoIosAdd } from "react-icons/io";
import { useState } from "react";
import { VscSettings } from "react-icons/vsc";

export default function Home() {
  const [fieldIDs, setID] = useState([{ fieldID: 1 }, { fieldID: 2 }]);
  function removeField(fieldID) {
    setID((prevFields) =>
      prevFields.filter((field) => field.fieldID != fieldID)
    );
  }
  function newField() {
    let newFieldIDs = [];
    for (let field in fieldIDs) {
      newFieldIDs.push(fieldIDs[field]);
    }
    newFieldIDs.push({ fieldID: fieldIDs[fieldIDs.length - 1].fieldID + 1 });
    setID(newFieldIDs);
  }

  return (
    <div>
      <div className="grid h-screen w-screen grid-rows-[2fr,5fr] gap-2">
        <header className="flex justify-center items-end font-mono text-[5em]">
          <h1>Regex Generator</h1>
        </header>
        <div className="flex flex-col justify-start items-center w-screen gap-6">
          <div className="flex justify-center items-center gap-2 w-[55em] h-[4em]">
            <p className="transition-all rounded-md w-full h-full bg-transparent outline outline-offset-2 outline-2 outline-gray-300 p-2 text-4xl font-mono flex justify-between items-center">
              ...
              <MdContentCopy
                size={50}
                className="transition cursor-pointer fill-gray-400 hover:fill-gray-300"
              />
            </p>
            {/* <IoIosArrowDropdown className="transition cursor-pointer fill-gray-400 hover:fill-gray-300 w-[3em] h-full" /> */}
          </div>
          <div className="transition-all flex flex-col gap-4">
            {fieldIDs.map((field) => (
              <StringInput
                key={field.fieldID}
                {...field}
                onRemove={(fieldID) => removeField(fieldID)}
              />
            ))}
          </div>
          <div className="transition-all flex w-[55em] h-[3em] justify-end items-center">
            <button onClick={() => newField()} className="transition-all w-auto h-full flex justify-center items-center p-0 pr-3 gap-0 outline outline-offset-2 outline-2 outline-gray-400 hover:outline-gray-300 rounded-md text-3xl">
            <IoIosAdd size={48} />
              Field
            </button>
            {/* <button>
              <VscSettings />
            </button> */}
          </div>
        </div>
      </div>
      <footer className="fixed bottom-10 right-10">
        <BsQuestionSquare className="transition cursor-pointer fill-gray-400 w-full h-[3.5em] hover:fill-gray-300 " />
      </footer>
    </div>
  );
}

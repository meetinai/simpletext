import React, { useState } from 'react';

const units = ['Bit', 'Byte', 'KB', 'MB', 'GB', 'TB'];

const Converter = () => {
  const [input, setInput] = useState(0);
  const [inputUnit, setInputUnit] = useState('Bit');
  const [outputUnit, setOutputUnit] = useState('Bit');
  const [output, setOutput] = useState(0);

  const convert = () => {
    let inputInBits = 0;
    switch (inputUnit) {
      case 'Bit':
        inputInBits = input;
        break;
      case 'Byte':
        inputInBits = input * 8;
        break;
      case 'KB':
        inputInBits = input * 8 * 1024;
        break;
      case 'MB':
        inputInBits = input * 8 * 1024 * 1024;
        break;
      case 'GB':
        inputInBits = input * 8 * 1024 * 1024 * 1024;
        break;
      case 'TB':
        inputInBits = input * 8 * 1024 * 1024 * 1024 * 1024;
        break;
      default:
        inputInBits = 0;
    }

    let outputInBits = 0;
    switch (outputUnit) {
      case 'Bit':
        outputInBits = inputInBits;
        break;
      case 'Byte':
        outputInBits = inputInBits / 8;
        break;
      case 'KB':
        outputInBits = inputInBits / (8 * 1024);
        break;
      case 'MB':
        outputInBits = inputInBits / (8 * 1024 * 1024);
        break;
      case 'GB':
        outputInBits = inputInBits / (8 * 1024 * 1024 * 1024);
        break;
      case 'TB':
        outputInBits = inputInBits / (8 * 1024 * 1024 * 1024 * 1024);
        break;
      default:
        outputInBits = 0;
    }

    setOutput(outputInBits);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <div className="flex space-x-5">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
          className="p-2 border-2 border-blue-500 rounded text-black"
        />
        <select
          value={inputUnit}
          onChange={(e) => setInputUnit(e.target.value)}
          className="p-2 border-2 border-blue-500 rounded"
        >
          {units.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={convert}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Convert
      </button>
      <div className="flex space-x-5">
        <input
          type="number"
          value={output}
          disabled
          className="p-2 border-2 border-blue-500 rounded text-black"
        />
        <select
          value={outputUnit}
          onChange={(e) => setOutputUnit(e.target.value)}
          className="p-2 border-2 border-blue-500 rounded"
        >
          {units.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Converter;
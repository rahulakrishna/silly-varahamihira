import React from 'react';

const getObjectFromString = (str, delimiter, lines) => {
  const allLines = str.split(/\r\n|\n/);
  console.log({ allLines });
  const result = allLines.map(line => line.split(delimiter).map(word => word));
  return result;
};

const Table = ({ content, delimiter, lines }) => {
  return (
    <div>
      <h3>Table to follow</h3>
      {/* {JSON.stringify({
        result: getObjectFromString(content, delimiter, lines)
      })} */}
      {getObjectFromString(content, delimiter, lines).map(line => (
        <div>
          {line.map(word => (
            <span style={{ margin: '4px' }}>{word}</span>
          ))}
        </div>
      ))}
      {console.log({ result: getObjectFromString(content, delimiter, lines) })}
    </div>
  );
};

export default Table;

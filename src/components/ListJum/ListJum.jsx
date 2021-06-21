import React, { useState, useEffect, useRef, useMemo } from "react";
import { db } from "../../db/data";

export const ListJum = () => {
  //   const [entities, setEntities] = useState(db);
  const [value, setValue] = useState("");
  const refInput = useRef(null);

  const searchJum = (text) => {
    const data = db.filter((_) => _.title.toLowerCase().indexOf(text.toLowerCase()) >= 0);
    return data;
  };

  const list = useMemo(() => searchJum(value), [value]);

  const handleChange = () => {

    console.log("-->", refInput.current.value);
    console.time('init')
    setValue(refInput.current.value);
    console.timeEnd('init')
    // const data = searchJum(refInput.current.value);
    // setEntities(data);
  };

  function autoFocus() {
    refInput.current.focus();
  }

  useEffect(() => {
    console.log("**");
    autoFocus();
  }, []);

  return (
    <div>
      <div className="search">
        <input
          type="text"
          ref={refInput}
          value={value}
          onChange={handleChange}
          className="search--input"
        />
      </div>
      <div className="list">
        total: {list.length}
        {list.map((entity) => (
          <div className="row" key={entity.id}>
            <span>{entity.title}</span>
            <span>{entity.completed}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

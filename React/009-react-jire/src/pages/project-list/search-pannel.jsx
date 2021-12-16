import React, { useState } from "react";

const SearchPannel = ({ param, setParam, users }) => {
  return (
    <form action="">
      <div>
        <input
          type="text"
          value={param.projectName}
          onChange={(e) => {
            setParam({
              ...param,
              projectName: e.target.value,
            });
          }}
        />
        <select
          value={param.personId}
          onChange={(e) => {
            setParam({
              ...param,
              personId: e.target.value,
            });
          }}
        >
          <option value="" key={0}>负责人</option>
          {users.map((v) => (
            <option value={v.personId} key={v.personId}>
              {v.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default SearchPannel;

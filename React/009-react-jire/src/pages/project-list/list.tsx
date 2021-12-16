import React from "react";

import { Project } from "./index";

interface ListProps {
  list: Project[];
}

const List = ({ list }: ListProps) => {
  return (
    <table>
      <thead>
        <tr key={0}>
          <th>项目名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((v) => (
          <tr key={v.id}>
            <td>{v.projectName}</td>
            <td>{v.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;

import React, { useEffect, useState } from "react";
import * as qs from 'qs'

import SearchPannel from "./search-pannel";
import List from "./list";
import { clearPlainObject, useDebounce } from "./util";

const baseURL = process.env.REACT_APP_BASE_URL;

const ProjectList = () => {
  const [param, setParam] = useState({
    projectName: "",
    personId: "",
  });

  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  const debounceParam = useDebounce(param, 1000)

  useEffect(() => { 
    // 获取数据
    fetch(`${baseURL}/projects?${qs.stringify(clearPlainObject(debounceParam))}`).then(async (response) => {
      if (response.ok) setList(await response.json());
    });
  }, [debounceParam]);

  // 获取用户名
  useEffect(() => {
    fetch(`${baseURL}/users`).then(async (response) => {
      if (response.ok) setUsers(await response.json());
    });
  }, []);

  return (
    <div>
      <SearchPannel param={param} setParam={setParam} users={users}/>
      <List list={list} />
    </div>
  );
};


export default ProjectList
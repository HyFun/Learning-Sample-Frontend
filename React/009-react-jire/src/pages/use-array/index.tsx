import React, { InputHTMLAttributes, useRef, useState } from "react";

interface Person {
  name: string;
  age: number;
}

export default function ArrayList() {
  const { persons, add, clear, remove } = useArray([
    {
      name: "jack ma",
      age: 26,
    },
    {
      name: "华腾",
      age: 28,
    },
  ]);
  const iptRef = useRef<any>();

  const clickAdd = () => {
    const value = iptRef.current?.value.trim();
    if (!value) {
      alert(`请填写名字`);
      return;
    }
    add({ name: value!, age: Date.now() });
  };
  return (
    <>
      <input ref={iptRef} type="text" />
      <button onClick={clickAdd}>添加</button>
      <button onClick={clear}>clear</button>

      <ul>
        {persons.map((v, index) => (
          <li key={v.age}>{v.name}</li>
        ))}
      </ul>
    </>
  );
}

function useArray<T>(initial: T[]) {
  const [persons, setPersons] = useState(initial);
  return {
    persons,
    setPersons,
    add: (person: T) => {
      setPersons([...persons, person]);
    },
    remove: (index = 0) => {
      const result = [...persons];
      result.splice(index, 1);
      setPersons(result);
    },
    clear: () => {
      setPersons([]);
    },
  };
}

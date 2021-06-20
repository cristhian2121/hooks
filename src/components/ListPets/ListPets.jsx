import React, { useEffect, useState } from "react";

export function ListPets() {
  const [users, setUsers] = useState([
    {
      name: "Cristhian Delgado",
      age: 28,
      actived: false,
    },
    {
      name: "Juan Perez",
      age: 32,
      actived: false,
    },
  ]);

  function addUser() {
    const user = [
      ...users,
      {
        name: "other",
        age: 21,
        actived: false,
      },
    ];
    setUsers(user);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("***");
    }, 2000);
    return () => {
      console.log("***, exit");
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container-list">
      {users.map((user) => (
        <div className="row" key={user.age}>
          <div className="active" onClick={() => user.actived = true}>
            {user.name} - {user.age} - {user.actived ? 'Active': ''}
          </div>
        </div>
      ))}
      <div>
        <button onClick={addUser}>Agregar</button>
      </div>
    </div>
  );
}

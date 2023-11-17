import { useEffect, useState } from "react";

export default function People() {
  const [people, setPeople] = useState<any[]>();

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const people = await response.json();
      setPeople(people);
    }

    getData();
  }, []);

  return (
    <div>
      {people &&
        people.map((person: any) => {
          return <p key={person.id}>{person.name}</p>;
        })}
    </div>
  );
}

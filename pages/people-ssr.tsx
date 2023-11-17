export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const people = await response.json();

  return {
    props: {
      people,
    },
  };
}

export default function People({ people }: any) {

  return (
    <div>
      {people && people.map((person: any) => {
        return <p key={person.id}>{person.name}</p>;
      })}
    </div>
  );
}

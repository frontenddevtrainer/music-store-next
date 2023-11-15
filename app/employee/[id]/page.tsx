export default function EmployeeDetail({ params }: { params: { id: string } }) {
  return <div>Id Param is: {params.id}</div>;
}
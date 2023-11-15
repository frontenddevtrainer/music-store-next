function EmployeeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <table>
        <tr>
          <td>Left Navigation</td>
          <td>{children}</td>
        </tr>
      </table>
    </div>
  );
}

export default EmployeeLayout;

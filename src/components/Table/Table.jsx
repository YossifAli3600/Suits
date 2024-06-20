import "./Table.css";

function Table({ children, className, noBorder }) {
  return (
    <div className={`main-table__cont ${className || ""}`}>
      <table className={`main-table w-full ${className || ""} ${noBorder ? 'table--noborders' : ''}`}>
        {children}
      </table>
    </div>
  );
}

const Header = ({ children, className }) => {
  return (
    <thead>
      <tr className={`table__header ${className || ""}`}>{children}</tr>
    </thead>
  );
};

const HeaderCell = ({ children, className }) => {
  return (
    <th
      className={`table__cell table__cell-header text-center ${className || ""
        }`}
    >
      {children}
    </th>
  );
};

const Body = ({ children, className }) => {
  return <tbody className={`${className || ""}`}>{children}</tbody>;
};

const Row = ({ children, className }) => {
  return <tr className={`${className || ""}`}>{children}</tr>;
};

const Cell = ({ children, className }) => {
  return (
    <td className={`table__cell text-center ${className || ""}`}>{children}</td>
  );
};

const SmallCell = ({ children, className }) => {
  return (
    <td
      className={`table__cell table__small-cell text-center ${className || ""}`}
    >
      {children}
    </td>
  );
};

export default Table;
export { Header, HeaderCell, Body, Row, Cell, SmallCell };

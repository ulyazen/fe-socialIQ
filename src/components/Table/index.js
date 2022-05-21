// import {
//   useTable,
//   useSortBy,
//   usePagination,
//   useRowSelect,
//   useAsyncDebounce,
//   useGlobalFilter,
// } from "react-table";

// import classnames from "classnames";
// import { FaSortDown, FaSortUp } from "react-icons/fa";

// function Table({ columns, data, variant = "table-bordered", ...props }) {
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     prepareRow,
//     rows,
//     page,
//     nextPage,
//     canNextPage,
//     previousPage,
//     canPreviousPage,
//     gotoPage,
//     pageOptions,
//     state,
//     setPageSize,
//     setGlobalFilter,
//   } = useTable(
//     {
//       columns,
//       data,
//     },
//     useGlobalFilter,
//     useSortBy,
//     usePagination,
//     useRowSelect
//   );

//   return (
//     <table className={classnames("table", variant)}>
//       <thead>
//         {headerGroups.map((headerGroup) => (
//           <tr key={headerGroup.id}>
//             {headerGroup.headers.map((column) => (
//               <th key={column.id} {...column.getSortByToggleProps()}>
//                 {column.render("Header")}
//                 <span>
//                   {column.isSorted ? (
//                     column.isSortedDesc ? (
//                       <FaSortUp />
//                     ) : (
//                       <FaSortDown />
//                     )
//                   ) : null}
//                 </span>
//               </th>
//             ))}
//           </tr>
//         ))}
//       </thead>
//       <tbody>
//         {page.map((row) => {
//           prepareRow(row);
//           return (
//             <tr key={row.id}>
//               {row.cells.map((cell) => (
//                 <td key={cell.id}>{cell.render("Cell")}</td>
//               ))}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// }

// export default Table;

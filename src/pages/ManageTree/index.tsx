import { Link } from "react-router-dom";
import { TREE_LIST } from "../../api";
import { ListView } from "../../components/ListView";
import { Column } from "../../components/ListView/Table";
import { dayFormat } from "../../utils";

export const ManageTree = () => {
  // TODO get list

  const columns: Column[] = [
    {
      header: "Mã số cây",
      accessorFn(row) {
        return <Link to={`/manage-tree/${row.treeCode}`}>{row.treeCode}</Link>;
      },
    },
    { header: "Tuyến đường", accessorKey: "streetId", align: "left" },
    { header: "Giống cây", accessorKey: "cultivarId", align: "left" },
    {
      header: "Thời điểm cắt tỉa gần nhất",
      accessorKey: "plantTime",
      align: "left",
    },
    {
      header: "Trạng thái",
      accessorFn(row) {
        return row.isExist ? "Đã cắt" : "Cần Cắt";
      },
    },
    {
      header: "ColN",
      accessorFn(row) {
        return <h6>{dayFormat(row.cutTime)}</h6>;
      },
    },
  ];

  return (
    <div>
      <ListView listURL={TREE_LIST} columns={columns} />
    </div>
  );
};

import { TREE_LIST } from "../../api";
import { ListView } from "../../components/ListView";
import { Column } from "../../components/ListView/Table";

export const ManageTree = () => {
  const columns: Column[] = [
    { header: "Mã số cây", accessorKey: "treeCode" },
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
  ];

  return (
    <div>
      <ListView listURL={TREE_LIST} columns={columns} />
    </div>
  );
};

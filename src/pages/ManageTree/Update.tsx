import { useEffect, useState } from "react";
import { TREE_DETAIL, useApi } from "../../api";
import { Field, FormBase } from "../../components/FormBase";

type Input = {
  treeId?: string;
  note?: string;
};
export const UpdateTree = () => {
  const [data, setData] = useState<Input | null>(null);

  const fetch = async () => {
    try {
      const data = await useApi.get(TREE_DETAIL.replace(":id", "treeId"));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    setData({ treeId: "ASAJSA_@!@_13123", note: "NOTEEEEE" });
    // TODO response data to setData
  };

  useEffect(() => {
    fetch();
  }, []);
  //TODO fetch api to get data

  const fields: Field[] = [
    {
      label: "Mã cây",
      formType: "input",
      key: "treeId",
      required: true,
      defaultValue: data?.treeId,
    },
    {
      label: "Quận",
      formType: "select",
      key: "quan",
      defaultValue: 2,
      options: [
        {
          key: "Q1",
          value: 1,
        },
        {
          key: "Q2",
          value: 2,
        },
      ],
    },
    {
      label: "Ghi chú",
      formType: "textarea",
      key: "note",
      required: true,
    },
    {
      label: "Đường kính thân",
      formType: "number",
      key: "ob",
    },
  ];

  const handleSubmit = (data: Record<string, unknown>) => {
    //TODO call api and return list
    console.log("CreateTree", data);
  };

  return <FormBase fields={fields} onSave={handleSubmit} />;
};

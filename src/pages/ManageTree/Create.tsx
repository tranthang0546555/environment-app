import { Field, FormBase } from "../../components/FormBase";

export const CreateTree = () => {
  const fields: Field[] = [
    {
      label: "Mã cây",
      formType: "input",
      key: "treeId",
      required: true,
    },
    {
      label: "Quận",
      formType: "select",
      key: "quan",
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

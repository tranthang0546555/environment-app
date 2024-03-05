import { useEffect, useState } from "react";
import { useApi } from "../../api";
import { Filter } from "../Filter";
import SearchBar from "../SearchBar";
import Table, { Column } from "./Table";
import "./style.scss";

type DataResponse = {
  data: [];
  page: number;
  size: number;
  total: number;
};

type Props = {
  listURL: string;
  columns: Column[];
};
export const ListView = (props: Props) => {
  const { listURL, columns } = props;

  const [data, setData] = useState<DataResponse>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await useApi.get(listURL);
      const data = await res.data;
      setData({ data: data, page: 1, size: 1, total: 1 }); //TODO when api-endpoint updated, set Data
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className="listView">
      <div className="search flex">
        <div className="search">
          <SearchBar onSubmit={() => {}} />
        </div>
        <div className="filter flex">
          <Filter />
        </div>
      </div>
      <div className="listing">
        <Table
          data={data?.data}
          currentPage={data?.page}
          loading={loading}
          pageCount={data?.total}
          columns={columns}
        />
      </div>
    </div>
  );
};

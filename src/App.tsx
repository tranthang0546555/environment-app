import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Login } from "./pages/Login";
import { Manage } from "./pages/Manage";
import { ManageEmployee } from "./pages/ManageEmployee";
import { ManageGarbageTruck } from "./pages/ManageGabageTruck";
import { ManageRoute } from "./pages/ManageRoute";
import { ManageTree } from "./pages/ManageTree";
import { CreateTree } from "./pages/ManageTree/Create";
import { UpdateTree } from "./pages/ManageTree/Update";
import { DetailTree } from "./pages/ManageTree/Detail";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Manage />} />
        <Route path="/manage-tree" element={<ManageTree />} />
        <Route path="/manage-tree/create" element={<CreateTree />} />
        <Route path="/manage-tree/:id" element={<DetailTree />} />
        <Route path="/manage-tree/:id/update" element={<UpdateTree />} />
        {/* <Route path="/detail-tree/:treeCode" element={<DetailTree />} /> */}
        {/* <Route path="/update-tree" element={<InputSizesExample />} /> */}
        <Route path="/manage-route" element={<ManageRoute />} />
        <Route path="/manage-garbage-truck" element={<ManageGarbageTruck />} />
        <Route path="/manage-employee" element={<ManageEmployee />} />
      </Routes>
    </Layout>
  );
}

export default App;

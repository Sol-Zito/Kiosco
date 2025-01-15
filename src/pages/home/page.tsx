import DataTable from "../../components/table/Tables";
import { Title } from "../../components/title/Title";

const Home = () => {
  return (
    <>
      <Title title="Productos" />
      <div className="card">
        <DataTable />
      </div>
    </>
  );
};
export default Home;

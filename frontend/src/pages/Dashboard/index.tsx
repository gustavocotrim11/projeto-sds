import { DonutChart } from "../../components/DonutChart";
import { BarChart } from "../../components/BarChart";
import { DataTable } from "../../components/DataTable";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

export function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary">Dashboad de Vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
            <DonutChart />
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary">Todas vendas</h2>
        </div>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

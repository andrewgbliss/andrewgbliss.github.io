import { Header } from "./_components/header";
import { ChartArea } from "./_components/ChartArea";
import { SectionCards } from "./_components/SectionCards";
import { DataTable } from "./_components/DataTable";
import data from "./_data/data.json";

export default function Page() {
  return (
    <>
      <Header
        title={"Dashboard"}
        breadcrumbs={[{ label: "Dashboard", href: "/dashboard" }]}
      ></Header>
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards />
            <div className="px-4 lg:px-6">
              <ChartArea />
            </div>
            <DataTable data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

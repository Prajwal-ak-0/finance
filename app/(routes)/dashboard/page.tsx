import { Heading } from "@/components/Heading"
import GetUser from "./components/GetUser";

export default async function DemoPage() {
  return (
    <div className="container mx-auto py-10">
      <Heading 
          title="Dashboard"
          description="Welcome to the dashboard."
      />
      <div className='flex-col mt-3' >
        <div className="flex-1 space-y-4 p-8 pt-6">
          <GetUser />
        </div>
      </div>
      {/* <DataTable columns={columns} data={data} /> */}
    </div>
  )
}
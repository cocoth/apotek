import { DataTable } from "@/components/Table/DataTable";
import { columns } from "@/components/Table/colums";
import Navbar from "@/components/navbar/Navbar";
import { Card } from "@/components/ui/card";
import { PrismaClient } from "@prisma/client";

export default async function Home() {
  const prisma = new PrismaClient()
  const data = await prisma.medichine.findMany({})

  return (
    <main>
      <Navbar />
      <Card className='mx-3 my-2 px-2 py-3'>
        <DataTable columns={columns} data={data} />
      </Card>
    </main>
  );
}

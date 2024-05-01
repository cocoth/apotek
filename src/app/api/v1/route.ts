import { formatDateToISO } from "@/utils/formatedDate";
import { Medichine, PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
  try {
    const body: Medichine = await req.json();
    const { name, description, company, production_date, expired_date } = body
    const prodDate = formatDateToISO(String(production_date))
    const exprDate = formatDateToISO(String(expired_date))
    const data = await prisma.medichine.create({
      data: {
        name,
        description,
        company,
        production_date,
        expired_date
      },
    });
    return NextResponse.json(data, {
      status: 201,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "POST data failed!" + error,
      },
      {
        status: 500,
      }
    );
  }
};

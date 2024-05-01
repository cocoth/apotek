import { Medichine, PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const PATCH = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const body: Medichine = await req.json();
    const data = await prisma.medichine.update({
      where: {
        id: Number(params.id),
      },
      data:{
        ...body
      }
    });
    return NextResponse.json(data, {
      status: 200
    })
  } catch (error) {
    return NextResponse.json(
      {
        error: "Update data failed!",
      },
      {
        status: 500,
      }
    );
  }
};

export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const data = await prisma.medichine.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(
      {
        success: `${data} has been deleted!`,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "delete data failed!",
      },
      {
        status: 404,
      }
    );
  }
};

import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "AptitudeMaterial.pdf");
  const fileName = "AptitudeMaterial.pdf";

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ message: "File not found" }, { status: 404 });
  }

  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Disposition": `attachment; filename=${fileName}`,
      "Content-Type": "application/pdf",
    },
  });
}

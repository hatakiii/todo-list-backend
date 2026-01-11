// app/api/todos/[id]/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { Todo } from "@/models/Todo";

export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  await connectDB();
  const body = await req.json();

  const updated = await Todo.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  });

  if (!updated) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  return NextResponse.json(updated);
}

export async function DELETE(
  _: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  await connectDB();
  const deleted = await Todo.findByIdAndDelete(id);

  if (!deleted) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}

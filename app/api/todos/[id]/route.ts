// app/api/todos/[id]/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { Todo } from "@/models/Todo";
import { error } from "console";

export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await req.json();

    await connectDB();

    const updated = await Todo.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return NextResponse.json({ error: "Todo not found" }, { status: 404 });
    }

    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    console.error("PATCH, /api/todos/[id] error:", error);

    return NextResponse.json(
      { error: "Failed to update todo" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    await connectDB();
    const deleted = await Todo.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ error: "Todo not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("DELETE /api/todos/[id] error:", error);

    return NextResponse.json(
      { error: "Failed to delete todo" },
      { status: 500 }
    );
  }
}

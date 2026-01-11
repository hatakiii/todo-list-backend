// app/api/todos/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { Todo } from "@/models/Todo";

export async function GET() {
  try {
    await connectDB();
    const todos = await Todo.find().sort({ createdAt: -1 });
    return NextResponse.json(todos);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch todos" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    if (!body?.title || typeof body.title !== "string") {
      return NextResponse.json(
        { error: "Invalid request: title is required" },
        { status: 400 }
      );
    }

    const todo = await Todo.create({ title: body.title });
    return NextResponse.json(todo, { status: 201 });
  } catch (error) {
    console.error("POST /api/todos error:", error);
    return NextResponse.json(
      { error: "Failed to create todo" },
      { status: 500 }
    );
  }
}

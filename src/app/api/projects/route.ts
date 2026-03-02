import { NextResponse } from "next/server";
import { fetchAllProjects } from "@/lib/r2";

/**
 * GET /api/projects
 * Fetch all projects from R2
 */
export async function GET() {
  try {
    const projects = await fetchAllProjects();

    return NextResponse.json({
      success: true,
      data: projects,
      meta: {
        total: projects.length,
      },
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

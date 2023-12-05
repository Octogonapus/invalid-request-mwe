import { json } from "@sveltejs/kit";

export async function GET({ request }) {
  const req = await request.json();
  return json({ req: req }, { status: 200 });
}

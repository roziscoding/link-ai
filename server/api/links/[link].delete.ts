import { H3Event } from "h3";
import { Link } from "~/components/link/types";

function getRequestUrl(event: H3Event) {
  return new URL(getRequestPath(event), `https://${getRequestHost(event)}`);
}

export default defineEventHandler(async (event) => {
  const key = getRouterParam(event, "link");

  if (!key) return createError({ message: "Missing link key", status: 400 });

  await useStorage<Link>("links").removeItem(key);

  return new Response(null, { status: 204 });
});

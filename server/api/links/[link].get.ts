import { H3Event } from "h3";
import { Link } from "../../../components/link/types";

function getRequestUrl(event: H3Event) {
  return new URL(getRequestPath(event), `https://${getRequestHost(event)}`);
}

export default defineEventHandler(async (event) => {
  const key = getRouterParam(event, "link");
  if (!key) return createError({ message: "Missing link key", status: 404 });

  const link = await useStorage<Link>("links").getItem(key);

  if (!link)
    return createError({
      message: `link with id ${key} was not found`,
      status: 404,
      statusMessage: "Link not found",
    });

  return sendRedirect(event, link.url);
});

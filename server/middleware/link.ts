import { H3Event } from "h3";
import { Link } from "../../components/link/types";

function getRequestUrl(event: H3Event) {
  return new URL(getRequestPath(event), `https://${getRequestHost(event)}`);
}

const bypassedPaths = ["/", "/admin"];

const intercept = (pathname: string) => {
  const bypassRules = [
    (pathname: string) => !pathname.startsWith("/api/"),
    (pathname: string) => !bypassedPaths.includes(pathname),
  ];

  return bypassRules.every((rule) => rule(pathname));
};

export default defineEventHandler(async (event) => {
  const url = getRequestUrl(event);

  const intercepted = intercept(url.pathname);

  if (intercepted) {
    const key = url.pathname.split("/").pop() || "";

    const link = await useStorage<Link>("links").getItem(key);

    if (link) return sendRedirect(event, link.url);
  }
});

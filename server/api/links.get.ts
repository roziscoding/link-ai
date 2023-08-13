import { Link } from "~/components/link/types";
import { hasSession } from "../middleware/1_session";

export default defineEventHandler(async (event) => {
  const session = hasSession(event) ? event.context.session : undefined;

  const linkStorage = useStorage<Link>();

  const keys = await linkStorage.getKeys("links");

  const items = await linkStorage
    .getItems(keys)
    .then((items) => items.map((item) => item.value as Link).filter(Boolean));

  return session ? items : items.filter((item) => item.listed);
});

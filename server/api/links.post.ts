import { useValidatedBody } from "h3-zod";
import { Link } from "../../components/link/types";
import { hasSession } from "../middleware/1_session";

export default eventHandler(async (event) => {
  if (!hasSession(event)) {
    return createError({
      message: "Unauthorized",
      status: 401,
      statusMessage: "Unauthorized",
    });
  }

  const body = await useValidatedBody(event, Link);
  const linkStorage = useStorage("links");
  const key = body.id;

  await linkStorage.setItem(key, body);
  return body;
});

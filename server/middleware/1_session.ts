import { getServerSession } from "#auth";
import { type Session } from "next-auth";

export default eventHandler(async (event) => {
  const session = await getServerSession(event);
  event.context.session = session;
});

export function hasSession<T extends { context: any }>(event: T): event is T & { context: { session: Session } } {
  return Boolean(event.context.session);
}

import { hasSession } from "./1_session";

export default eventHandler(async (event) => {
  if (!hasSession(event)) return;

  if (event.path !== "/logout" && event.context.session.user) {
    const config = useRuntimeConfig();
    const allowedEmails = config.adminEmails.split(",");

    if (!allowedEmails.includes(String(event.context.session.user.email))) {
      return sendRedirect(event, "/logout");
    }
  }
});

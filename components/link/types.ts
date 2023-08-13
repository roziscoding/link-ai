import { z, zh } from "h3-zod";
import * as icons from "simple-icons";

export const iconSlugs = Object.values(icons).map((icon) => icon.slug);

export const Icon = z
  .string()
  .refine((value) => iconSlugs.includes(value))
  .transform((value) => `https://cdn.simpleicons.org/${value}`)
  .brand("Icon");

export type Icon = z.infer<typeof Icon>;

export const Link = z.object({
  id: z.string().min(3),
  name: z.string().min(3),
  url: z.string().url(),
  icon: Icon,
  listed: z.union([zh.boolAsString.optional().default("false"), z.boolean().default(false)]),
  rel: z.string().optional(),
});

export type Link = z.infer<typeof Link>;

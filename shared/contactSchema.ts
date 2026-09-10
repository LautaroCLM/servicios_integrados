import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "El nombre es obligatorio")
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede superar los 100 caracteres"),
  company: z
    .string()
    .trim()
    .min(1, "La empresa o planta es obligatoria")
    .min(2, "Ingrese el nombre de su empresa o planta")
    .max(100, "El nombre de la empresa no puede superar los 100 caracteres"),
  phone: z
    .string()
    .trim()
    .min(1, "El teléfono es obligatorio")
    .min(6, "Ingrese un número de teléfono válido (mínimo 6 dígitos)")
    .max(30, "El teléfono no puede superar los 30 caracteres")
    .regex(
      /^[+0-9\s\-()./]+$/,
      "El teléfono contiene caracteres no válidos"
    ),
  email: z
    .string()
    .trim()
    .min(1, "El correo electrónico es obligatorio")
    .email("Ingrese un correo electrónico válido")
    .max(255, "El correo electrónico no puede superar los 255 caracteres"),
  serviceType: z
    .string()
    .trim()
    .min(1, "Debe seleccionar un servicio"),
  message: z
    .string()
    .trim()
    .min(1, "El mensaje es obligatorio")
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(2000, "El mensaje no puede superar los 2000 caracteres"),
  // Honeypot field invisible en la UI para capturar bots
  website_hp: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

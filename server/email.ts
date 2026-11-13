import nodemailer from "nodemailer";
import type { ContactFormData } from "../shared/contactSchema.js";

const DEFAULT_RECIPIENT = "antonioa@serviciosintegradosweb.com";

interface SendEmailResult {
  success: boolean;
  simulated?: boolean;
  messageId?: string;
  error?: string;
}

interface ClientMeta {
  ip?: string;
  userAgent?: string;
}

/**
 * Escapes HTML characters to prevent HTML injection in emails
 */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Send contact form email using Nodemailer SMTP transport, with fallback logging when SMTP is not configured.
 */
export async function sendContactEmail(
  data: ContactFormData,
  meta?: ClientMeta
): Promise<SendEmailResult> {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_EMAIL_TO || DEFAULT_RECIPIENT;
  const from =
    process.env.CONTACT_EMAIL_FROM ||
    (user ? `"Servicios Integrados Web" <${user}>` : `"Servicios Integrados Web" <no-reply@serviciosintegradosweb.com>`);

  const now = new Date();
  const formattedDate = now.toLocaleString("es-AR", {
    timeZone: "America/Argentina/Buenos_Aires",
    dateStyle: "full",
    timeStyle: "medium",
  });

  const subject = `Nueva Consulta Técnica: ${data.serviceType} — ${data.company} (${data.name})`;

  const textBody = `
=================================================================
NUEVA CONSULTA TÉCNICA RECIBIDA DESDE LA WEB
Servicios Integrados — Ingeniería, Mantenimiento y Confiabilidad
=================================================================

Fecha y Hora: ${formattedDate}

DATOS DEL CONTACTO:
-----------------------------------------------------------------
• Nombre: ${data.name}
• Empresa / Planta: ${data.company}
• Correo Electrónico: ${data.email}
• Teléfono / WhatsApp: ${data.phone}
• Servicio Solicitado: ${data.serviceType}

DETALLE / MENSAJE TÉCNICO:
-----------------------------------------------------------------
${data.message}

-----------------------------------------------------------------
Metadatos:
• IP: ${meta?.ip || "No disponible"}
• Navegador: ${meta?.userAgent || "No disponible"}
=================================================================
`;

  const htmlBody = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f6f8; margin: 0; padding: 24px; color: #10181d; }
    .card { max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
    .header { background: #10181d; padding: 24px; text-align: center; border-bottom: 4px solid #6d28d9; }
    .header h1 { color: #ffffff; margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 1px; }
    .header p { color: #a78bfa; margin: 6px 0 0 0; font-size: 12px; font-weight: bold; letter-spacing: 1.5px; }
    .badge { display: inline-block; background-color: #6d28d9; color: #ffffff; padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: bold; text-transform: uppercase; margin-top: 10px; }
    .content { padding: 28px; }
    .field-group { margin-bottom: 20px; }
    .field-label { font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
    .field-value { font-size: 15px; color: #0f172a; font-weight: 500; }
    .field-value a { color: #6d28d9; text-decoration: none; font-weight: 600; }
    .message-box { background: #f8fafc; border-left: 4px solid #6d28d9; padding: 16px; border-radius: 6px; font-size: 14px; line-height: 1.6; color: #1e293b; margin-top: 8px; white-space: pre-wrap; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .footer { background: #f1f5f9; padding: 16px 28px; font-size: 11px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0; }
    @media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>Servicios Integrados</h1>
      <p>Mantenimiento · Ingeniería · Confiabilidad Industrial</p>
      <div class="badge">Solicitud de Visita Técnica y Presupuesto</div>
    </div>
    <div class="content">
      <div class="grid">
        <div class="field-group">
          <div class="field-label">Nombre del Contacto</div>
          <div class="field-value">${escapeHtml(data.name)}</div>
        </div>
        <div class="field-group">
          <div class="field-label">Empresa / Planta</div>
          <div class="field-value"><strong>${escapeHtml(data.company)}</strong></div>
        </div>
      </div>

      <div class="grid">
        <div class="field-group">
          <div class="field-label">Correo Electrónico</div>
          <div class="field-value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
        </div>
        <div class="field-group">
          <div class="field-label">Teléfono / WhatsApp</div>
          <div class="field-value"><a href="https://wa.me/${escapeHtml(data.phone.replace(/[^0-9]/g, ""))}" target="_blank">${escapeHtml(data.phone)}</a></div>
        </div>
      </div>

      <div class="field-group">
        <div class="field-label">Servicio Requerido</div>
        <div class="field-value" style="color: #6d28d9; font-weight: 700;">${escapeHtml(data.serviceType)}</div>
      </div>

      <div class="field-group">
        <div class="field-label">Mensaje / Detalle Técnico</div>
        <div class="message-box">${escapeHtml(data.message)}</div>
      </div>
    </div>
    <div class="footer">
      Recibido el ${formattedDate}<br>
      IP de origen: ${escapeHtml(meta?.ip || "N/D")}
    </div>
  </div>
</body>
</html>
`;

  // Check if SMTP is configured
  if (!host || !user || !pass) {
    // Solo se simula el envío en desarrollo local. En producción se informa el error
    // para que el visitante use WhatsApp y la consulta no se pierda en silencio.
    const allowSimulation =
      process.env.NODE_ENV === "development" || process.env.ALLOW_EMAIL_SIMULATION === "true";
    if (!allowSimulation) {
      console.error("❌ [EMAIL SERVICE] SMTP no configurado: faltan SMTP_HOST, SMTP_USER o SMTP_PASS.");
      return {
        success: false,
        error: "SMTP no configurado",
      };
    }

    console.log("\n==================================================");
    console.log("ℹ️ [EMAIL SERVICE] SMTP no configurado (modo desarrollo / fallback)");
    console.log(`Destinatario previsto: ${to}`);
    console.log(`Asunto: ${subject}`);
    console.log("--------------------------------------------------");
    console.log(`De: ${data.name} <${data.email}>`);
    console.log(`Empresa: ${data.company}`);
    console.log(`Teléfono: ${data.phone}`);
    console.log(`Servicio: ${data.serviceType}`);
    console.log(`Mensaje:\n${data.message}`);
    console.log("==================================================\n");

    return {
      success: true,
      simulated: true,
      messageId: `simulated-${Date.now()}`,
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });

    const info = await transporter.sendMail({
      from,
      to,
      replyTo: `${data.name} <${data.email}>`,
      subject,
      text: textBody,
      html: htmlBody,
    });

    console.log(`✅ [EMAIL SERVICE] Email enviado exitosamente a ${to}. MessageId: ${info.messageId}`);
    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    console.error("❌ [EMAIL SERVICE] Error enviando email con nodemailer:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Error desconocido al enviar el email",
    };
  }
}

/**
 * Google Apps Script Web App backing the Trizen contact form.
 * This file is NOT built or run by Next.js   it's reference source to paste
 * into script.google.com. See ../.env.example for the deploy steps.
 *
 * Receives the form fields as GET query params (see src/lib/submitContact.ts
 * for why GET, not POST) and emails them to the team via MailApp, using the
 * Gmail account that owns this script   no SMTP credentials anywhere.
 */
function doGet(e) {
  try {
    const p = e.parameter; // { name, email, phone, subject, message }

    MailApp.sendEmail({
      to: "trizen@trizentechnologies.com",
      replyTo: p.email,
      subject: `New contact form submission: ${p.subject}`,
      body: [
        `Name: ${p.name}`,
        `Email: ${p.email}`,
        `Phone: ${p.phone || "-"}`,
        `Subject: ${p.subject}`,
        "",
        "Message:",
        p.message,
      ].join("\n"),
    });

    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: err.message })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

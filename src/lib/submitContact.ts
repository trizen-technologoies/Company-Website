/**
 * Sends a contact-form submission to the Google Apps Script Web App, which
 * emails it to the team via MailApp   no SMTP credentials anywhere in this
 * codebase. Uses GET with query params (not POST with a JSON body): Apps
 * Script Web Apps respond to POST with a redirect that `fetch` sometimes
 * mishandles from the browser, and GET sidesteps that.
 *
 * Hardcoded (not an env var) to match the other Trizen site's
 * submitToSheets.jsx   the "Anyone can execute" Web App URL isn't a secret,
 * so there's nothing an env var would protect here.
 */
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwNMNMQIS0qQIxOKpz2Ueuq3kYiMsxO70EE41i1QxRmUr1GD-64YDLjDCQWJ0LuhwD0/exec";

export type ContactSubmission = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

export async function submitContact(data: ContactSubmission) {
  const params = new URLSearchParams({
    ...data,
    phone: data.phone ?? "",
    source: "trizen-website-contact-page",
  });
  const url = `${SCRIPT_URL}?${params.toString()}`;
  const response = await fetch(url, { method: "GET", redirect: "follow" });
  const result = JSON.parse(await response.text());
  if (!result.success) throw new Error(result.error || "Submission failed");
  return result;
}

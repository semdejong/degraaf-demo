/** Opens the visitor's own mail program. Nothing is sent by this site. */
export function conceptMailto(email: string, subject: string, body: string): string {
  const to = email.trim();
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

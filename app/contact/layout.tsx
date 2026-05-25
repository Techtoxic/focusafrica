import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Focus Africa Leadership. Reach us at International House, Nairobi, Kenya or contact us via email or phone.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

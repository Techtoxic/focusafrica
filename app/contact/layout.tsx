import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Focus Africa Leadership. Visit us at Karson Photo House, Kimathi Way, 1st Floor, Nyeri or contact us via email or phone.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

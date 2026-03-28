import MaxWidthWrapper from "@/components/common/MaxWidthWrapper"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MaxWidthWrapper>
      {children}
    </MaxWidthWrapper>
  )
}

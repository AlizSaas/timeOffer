import MaxWidthWrapper from "@/components/common/MaxWidthWrapper"

export default function EmployeeLayout({
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

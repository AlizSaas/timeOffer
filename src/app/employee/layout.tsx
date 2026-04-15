import MaxWidthWrapper from "@/components/common/MaxWidthWrapper"
import { ThemeToggle } from "@/components/theme-toggle"

export default function EmployeeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MaxWidthWrapper>
      <div className="flex justify-end pt-4">
        <ThemeToggle />
      </div>
      {children}
    </MaxWidthWrapper>
  )
}

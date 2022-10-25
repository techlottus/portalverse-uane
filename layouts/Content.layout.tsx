import ContentLayoutProps from "@/types/ContentLayout.types"

export default function ContentLayout({ children } : ContentLayoutProps) {
  return <section className="grid grid-cols-12-gap w-t:grid-cols-8-gap w-p:grid-cols-4-gap gap-grid-gap max-w-d-base mx-auto w-d-base:px-6">
    { children }
  </section>
}
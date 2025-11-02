import ContactButton from "@/components/ContactButton"
import { ReactNode } from "react"

interface CTASectionProps {
    heading: string
    description: ReactNode
}

export default function CTASection({ heading, description }: CTASectionProps) {
    return (
        <section className="page-container py-12">
            <div className="prose prose-xl bg-white shadow-lg rounded-2xl p-8 mx-auto text-center">
                <h2>{heading}</h2>
                <p>{description}</p>
                <ContactButton />
            </div>
        </section>
    )
}

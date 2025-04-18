import getContentBySlug from "@/utils/getContentBySlug"
import '../styles/faq.css'

const faqFilenames = [1, 2, 3, 4, 5, 6]

export default async function ExpandableFAQ() {
    const faq: { question: string, answer: string, filename: number }[] = []

    try {
        await Promise.all(faqFilenames.map(async (filename) => {
            try {
                const content = await getContentBySlug(`faq/${filename}`)
                faq.push({
                    filename,
                    question: content.frontMatter.question,
                    answer: content.html
                })
            } catch (err) {
                throw err
            }
        }))
    } catch (err) {
        throw err
    }

    faq.sort((a, b) => a.filename - b.filename)

    return (
        <div className="page-container py-16">
            <div className="prose prose-lg">
                <h2>Frequently asked questions</h2>
                {faq.map(({ question, answer }, index) => (
                    <div key={index}>
                        <h3>{question}</h3>
                        <div dangerouslySetInnerHTML={{ __html: answer }} />
                    </div>
                ))
                }
                <p>Still have questions? <a className="underline" href="mailto:jaredsalzano@gmail.com" target="_blank">Message me</a>.</p>
            </div>
        </div >
    )
}
import getContentBySlug from "@/utils/getContentBySlug"
import '../styles/faq.css'

const faqFilenames = [1, 2, 3, 4, 5, 6]

export default async function FAQ() {
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
        <div className="faq page-container pt-16">
            <h2 className="text-4xl font-bold text-center pb-12">Frequently asked questions</h2>
            <dl className="pb-10">
                {faq.map(({ question, answer }, index) => (
                    <div key={index} className="faq-item cursor-pointer border rounded-xl pb-3 mb-3">
                        <button className="pt-6 px-6 pb-3 w-full flex justify-between items-center">
                            <dt>
                                <h3 className="text-xl font-bold text-left pr-2">{question}</h3>
                            </dt>
                            <svg className="flex-shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.6569 5.50012L8 11.157L2.34314 5.50012" stroke="black" strokeWidth="2" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <dd className="px-6 overflow-hidden h-0">
                            <div className="faq-content" style={{ maxWidth: "45em" }} dangerouslySetInnerHTML={{ __html: answer }} />
                        </dd>
                    </div>
                ))
                }
            </dl>
            <p className="text-xl pb-10">Still have questions? <a className="underline font-semibold" href="mailto:jaredsalzano@gmail.com" target="_blank">Message me</a>.</p>
        </div>
    )
}
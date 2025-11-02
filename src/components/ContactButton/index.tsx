import './ContactButton.css'

export default function ContactButton() {
  return (
    <a
      className="contact-button inline-block rounded-2xl whitespace-nowrap no-underline font-bold tracking-[0.01em] pt-3 pb-3 px-4 border border-[#20e9c3] hover:text-gray-700 transition-all duration-1000"
      target="_blank"
      href="mailto:jaredsalzano@gmail.com"
    >
      Contact me
    </a>
  )
}

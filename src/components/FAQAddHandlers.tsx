// Add event handlers to FAQ component. Putting this in a sibling client component allows us to keep the FAQ component a server component

"use client"

import { useEffect } from "react";
import findParentWithSelector from "@/utils/findParentWithSelector"

export default function FAQAddHandlers() {
    useEffect(() => {
        function toggleItem(e: MouseEvent) {
            const target = e.target as HTMLElement;
            const faqItemEl = findParentWithSelector(target, '.faq-item')
            const ddEl = faqItemEl?.querySelector('dd')
            const contentEl = ddEl?.querySelector('.faq-content')
            const svgEl = faqItemEl?.querySelector('svg')

            if (!ddEl || !contentEl) {
                console.error('Could not find dd or content element')
            }

            if (getComputedStyle(ddEl!).height === '0px') {
                ddEl!.style.height = `${contentEl!.clientHeight}px`

                if (svgEl) svgEl.style.transform = 'rotate(180deg)'
            } else {
                ddEl!.style.height = '0px'
                if (svgEl) svgEl.style.transform = 'rotate(0deg)'
            }
        }

        document.querySelectorAll('.faq-item').forEach((item) => {
            const buttonEl = item.querySelector('button')
            const ddEl = item.querySelector('dd')
            buttonEl?.addEventListener('click', toggleItem)
            ddEl?.addEventListener('click', toggleItem)
        })
    }, [])
}
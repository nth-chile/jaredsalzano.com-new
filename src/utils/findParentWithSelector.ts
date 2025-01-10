export default function findParentWithSelector(element: HTMLElement, selector: string): HTMLElement | null {
  let currentElement = element;

  while (currentElement) {
    if (currentElement.matches(selector)) {
      return currentElement;
    }
    currentElement = currentElement.parentElement as HTMLElement;
  }

  return null;
}

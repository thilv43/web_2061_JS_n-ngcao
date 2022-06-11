export function $(element) {
    const elements = document.querySelectorAll(element);
    return elements.lenght == 1 ? elements[0] : elements;
}
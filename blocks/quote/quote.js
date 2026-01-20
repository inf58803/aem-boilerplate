import { fetchPlaceholders } from "../../scripts/aem.js";
export default async function decorate(block) {
    const placeholders = await fetchPlaceholders();
    if(placeholders.quote_suffix) {
        const suffix = document.createElement('div');
        suffix.className='quote_suffix';
        suffix.textContent= placeholders.quote_suffix;
        block.appendChild(suffix);
    }   
}
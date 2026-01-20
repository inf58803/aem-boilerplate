import { fetchPlaceholders } from "../../scripts/aem.js";
export default async function decorate(block) {
    console.log('quote loaded');
    const placeholders = await fetchPlaceholders();
    console.log('loaded placeholders',placeholders);
    if(placeholders.quoteSuffix) {
        const suffix = document.createElement('div');
        suffix.className='quoteSuffix';
        suffix.textContent= placeholders.quoteSuffix;
        block.appendChild(suffix);
    }   
}
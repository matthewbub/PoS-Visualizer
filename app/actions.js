'use server'
import npl from 'compromise';
 
export async function handleFormSubmission(prevState, formData) { 
  try {
    const textareaValue = formData.get('textarea');

    const doc = npl(textareaValue);
    const tagged = doc.sentences().terms().out('tags')

    const parsedMarkup = tagged.reduce((acc, curr) => {
      const word = Object.keys(curr)[0]
      const pos = Object.values(curr)[0][0]

      return acc + `<span class="${pos.toLowerCase()}" title="${pos}">${word}</span> `;
    }, '');

    return { textarea: parsedMarkup, success: true }
  } catch (e) {
    console.error(e)
    return { textarea: null, success: false }
  }
}

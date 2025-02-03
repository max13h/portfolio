export const splitLettersInHTML = (refEl: globalThis.Ref<any>, className: string) => {
  if (refEl.value) {
    refEl.value.innerHTML = refEl.value.textContent.replace(/\S/g, `<span class='${className} inline-block'>$&</span>`);
  }
}
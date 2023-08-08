const faqs = document.getElementsByClassName('js-faq-item')

const onClick = (e) => {
  for (faq of faqs) {
    const isClickedFaq = faq === e.currentTarget;

    if (isClickedFaq) {
      e.currentTarget.classList.toggle('collapsed')
    } else {
      faq.classList.add('collapsed')
    }
  }
}

for (faq of faqs) {
  faq.classList.add('collapsed')
  faq.addEventListener('click', (e) => onClick(e))
}

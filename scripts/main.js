function readMore(btn) {
    const post = btn.closest('.post');
    const dots = post.querySelector('.dots');
    const moreContent = post.querySelector('.more-read');
    if (dots.style.display==='none') {
        dots.style.display='inline';
        moreContent.style.display='none';
        btn.innerHTML = 'Read More';
    } else {
        dots.style.display='none';
        moreContent.style.display='inline';
        btn.innerHTML = 'Read Less';
    }
}

module.exports = Franz => {
  const getMessages = () => {
    let count = 0;
    const $inboxCounter = document.querySelector('.folders > :first-child > .folder-counter');

    if (null !== $inboxCounter) {
      count = parseInt($inboxCounter.textContent) || 0;
    }

    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
};

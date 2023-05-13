let initialWindowWidth = window.innerWidth;

addEventListener('resize', handleWindowResize);

function handleWindowResize(event) {
  const currentWindowWidth = window.innerWidth;
  const isWindowWidthChanged =
    (currentWindowWidth > 427 && initialWindowWidth < 428) ||
    (currentWindowWidth < 428 && initialWindowWidth > 427) ||
    (currentWindowWidth > 767 && initialWindowWidth < 768) ||
    (currentWindowWidth < 768 && initialWindowWidth > 767) ||
    (currentWindowWidth > 1157 && initialWindowWidth < 1158) ||
    (currentWindowWidth < 1158 && initialWindowWidth > 1157);

  if (isWindowWidthChanged) {
    location.reload();
  }
}

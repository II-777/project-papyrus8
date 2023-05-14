let initialWindowWidth = window.innerWidth;

addEventListener('resize', handleWindowResize);

function handleWindowResize(event) {
  const currentWindowWidth = window.innerWidth;
  const isWindowWidthChanged =
  (currentWindowWidth >= 768 && initialWindowWidth < 768) ||
  (currentWindowWidth < 768 && initialWindowWidth >= 768) ||
  (currentWindowWidth >= 1440 && initialWindowWidth < 1440) ||
  (currentWindowWidth < 1440 && initialWindowWidth >= 1440)

  if (isWindowWidthChanged) {
    location.reload();
  }
}

const handleURLButtonClick = (webUrl: string, newWindow?: boolean) => () => {
  // window.location.href = webUrl;
  window.open(webUrl, !newWindow ? '_self' : '_blank');
}

export {
  handleURLButtonClick
}
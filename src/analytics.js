export const trackPortfolioClick = (type, url) => {
  console.log("Portfolio click tracked:", type, url);

  if (typeof window.gtag === "function") {
    window.gtag("event", "portfolio_link_click", {
      link_type: type,
      link_url: url,
    });
  } else {
    console.error("Google Analytics gtag is not loaded!");
  }
};
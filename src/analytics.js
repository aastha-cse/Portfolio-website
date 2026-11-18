export const trackPortfolioClick = (type, url) => {
  if (typeof window.gtag === "function") {
    window.gtag("event", "portfolio_link_click", {
      link_type: type,
      link_url: url,
      page_location: window.location.href,
    });
  }
};

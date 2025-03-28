import { useState } from "react";

const Navbar = () => {
  
  const [isAdBannerShown, setIsAdBannerShown] = useState(true);

  return (
    <>
      <div>
  <div data-w-id="5ad9c7cd-d761-a4a6-e48e-e2d22da36e16" style={{height: isAdBannerShown ? "auto": 0, display: isAdBannerShown ? 'flex': 'none'}} className="top-bar-wrapper---brix">
    <div className="top-bar-container---brix top-bar-3---brix preview-page">
      <div className="f-banner-badge-7">
        <div className="text-block-4">Pro Tip</div>
      </div>
      <div className="top-bar-text---brix max-w-80-mobile---brix"><span className="text-span-4">Bookmark this page </span>to never run out of new music!</div><img data-w-id="5ad9c7cd-d761-a4a6-e48e-e2d22da36e1d" loading="lazy" alt="exit icon
" src="images/white-close-icon-top-notification-bar-webflow-cloneable-template-brix-templates.svg" className="close-icon---brix top-bar-3---brix" onClick={() => setIsAdBannerShown(false)} />
    </div>
  </div>
  <div data-collapse="medium" data-animation="default" data-duration={400} data-w-id="c082bc40-9418-910f-a0cc-f6467a17debe" data-easing="ease" data-easing2="ease" role="banner" className="spark-rounded-edge-navbar w-nav">
    <div className="spark-rounded-edge-nav-bar-inner">
      <div className="text-block nav">SiftGPT.com</div>
      <a href="#" className="spark-brand-logo w-nav-brand" />
      <nav role="navigation" className="spark-nav-menu spark-rounded-corners w-nav-menu">
        <a href="/" className="spark-nav-link spark-button w-nav-link">Playlist Generator</a>
      </nav>
      
      <div data-ix="simple-menu-button" className="spark-simple-menu-button w-nav-button">
        <div className="spark-line-1 spark-simple-line" />
        <div className="spark-line-2 spark-simple-line" />
        <div className="spark-line-3 spark-simple-line" />
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Navbar;

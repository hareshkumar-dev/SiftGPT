import React, { useState } from "react";

const FeaturesSection = () => {
  const [selectedGenre, setSelectedGenre] = useState("EDM")
  return (
    <section className="section_features-3">
      <div className="rl-page-padding">
        <div className="container-large">
          <div className="padding-bottom padding-xxhuge">
            <div className="builder_feature-grid-6 flex flex-col lg:flex-row">
              <div className="builder_feature-card feature-9 flex-1">
                <div className="builder_feature-top feature-11">
                  <div className="text-align-center max-width-xsmall">
                    <div className="margin-bottom margin-xsmall">
                      <h3 className="heading-custom-h3">
                        1. Describe Your Day
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="builder_feature-bottom feature-9">
                  <div className="site-builder-form-block w-auto">
                    <form
                      id="wf-form-brief"
                      name="wf-form-brief"
                      action="/app/project/create"
                      method="get"
                      className="site-builder-form"
                    >
                      <div className="site-builder-form-icon">
                        {/* SVG Placeholder for Describe Your Day Icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          viewBox="0 0 16 17"
                          fill="none"
                          preserveAspectRatio="xMidYMid meet"
                          aria-hidden="true"
                          role="img"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.9927 0.821758C12.9372 0.779878 12.8695 0.757217 12.8 0.757202C12.7305 0.757217 12.6628 0.779878 12.6073 0.821758C12.5518 0.863639 12.5115 0.922458 12.4924 0.989317L12.1454 2.20365C12.0708 2.46518 11.9306 2.70334 11.7383 2.89566C11.546 3.08798 11.3078 3.2281 11.0463 3.30279L9.83189 3.64968C9.76507 3.66882 9.7063 3.70919 9.66447 3.7647C9.62263 3.8202 9.6 3.88781 9.6 3.95732C9.6 4.02682 9.62263 4.09444 9.66447 4.14994C9.7063 4.20544 9.76507 4.24581 9.83189 4.26496L11.0463 4.61185C11.3078 4.68654 11.546 4.82666 11.7383 5.01898C11.9306 5.21129 12.0708 5.44946 12.1454 5.71098L12.4924 6.92532C12.5115 6.99213 12.5519 7.0509 12.6074 7.09274C12.6629 7.13457 12.7305 7.1572 12.8 7.1572C12.8695 7.1572 12.9371 7.13457 12.9926 7.09274C13.0481 7.0509 13.0885 6.99213 13.1076 6.92532L13.4546 5.71098C13.5292 5.44946 13.6694 5.21129 13.8617 5.01898C14.054 4.82666 14.2922 4.68654 14.5537 4.61185L15.7681 4.26496C15.8349 4.24581 15.8937 4.20544 15.9355 4.14994C15.9774 4.09444 16 4.02682 16 3.95732C16 3.88781 15.9774 3.8202 15.9355 3.7647C15.8937 3.70919 15.8349 3.66882 15.7681 3.64968L14.5537 3.30279C14.5537 3.30279 14.054 3.08798 13.8617 2.89566C13.6694 2.70334 13.5292 2.46518 13.4546 2.20365L13.1076 0.989317C13.0885 0.922458 13.0482 0.863639 12.9927 0.821758ZM6.78537 4.08631C6.67435 4.00255 6.53907 3.95723 6.4 3.9572C6.26093 3.95723 6.12565 4.00255 6.01463 4.08631C5.90361 4.17007 5.8229 4.28771 5.7847 4.42143L5.09089 6.85011C4.94151 7.37315 4.66125 7.84948 4.27661 8.23412C3.89196 8.61875 3.41561 8.89899 2.89255 9.04837L0.463785 9.74216C0.330148 9.78044 0.212607 9.86119 0.128933 9.97219C0.0452584 10.0832 0 10.2184 0 10.3574C0 10.4964 0.0452584 10.6317 0.128933 10.7427C0.212607 10.8537 0.330148 10.9344 0.463785 10.9727L2.89255 11.6665C3.41561 11.8159 3.89196 12.0961 4.27661 12.4808C4.66125 12.8654 4.94151 13.3417 5.09089 13.8648L5.7847 16.2934C5.82298 16.4271 5.90373 16.5446 6.01474 16.6283C6.12575 16.7119 6.26099 16.7572 6.4 16.7572C6.53901 16.7572 6.67425 16.7119 6.78525 16.6283C6.89626 16.5446 6.97702 16.4271 7.0153 16.2934L7.70911 13.8648C7.85849 13.3417 8.13875 12.8654 8.52339 12.4808C8.90804 12.0961 9.38439 11.8159 9.90745 11.6665L12.3362 10.9727C12.4699 10.9344 12.5874 10.8537 12.6711 10.7427C12.7547 10.6317 12.8 10.4964 12.8 10.3574C12.8 10.2184 12.7547 10.0832 12.6711 9.97219C12.5874 9.86119 12.4699 9.78044 12.3362 9.74216L9.90745 9.04837C9.90745 9.04837 8.90804 8.61875 8.52339 8.23412C8.13875 7.84948 7.85849 7.37315 7.70911 6.85011L7.0153 4.42143C6.9771 4.28771 6.89638 4.17007 6.78537 4.08631Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <input
                        className="site-builder-text-field bg-transparent w-[35rem]"
                        maxLength="256"
                        name="brief-2"
                        placeholder="How was your day? What are you doing now?"
                        type="text"
                        id="brief-2"
                        required
                      />
                      <input
                        type="submit"
                        className="button button-large max-width-full-mobile-landscape"
                        value="Generate"
                      />
                      <div
                        id="generate_sitemap_button"
                        className="button-14 button-large max-width-full-mobile-landscape hidden"
                      >
                        Generate
                      </div>
                    </form>
                    <div className="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>
                        Oops! Something went wrong while submitting the form.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="builder_feature-card feature-10 flex-1">
                <div className="builder_feature-top feature-11">
                  <div className="text-align-center max-width-xsmall">
                    <div className="margin-bottom margin-xsmall">
                      <h3 className="heading-custom-h3">2. Select A Genre</h3>
                    </div>
                  </div>
                </div>
                <div className="builder_feature-bottom feature-10">
                  <div className="builder_feature-10_ui">
                    <div className="builder_feature-10_figma-container">
                      <div className="builder_feature-10_figma-headers">
                        Choose A Genre (Optional)
                      </div>
                      <div className="builder_feature-10_figma-headers">
                        Any Genre
                      </div>
                    </div>
                    <div className="builder_feature-10_figma-bottom">
                      <div className="builder_feature-10_figma-tabs">
                        <a className={`builder_feature-10_figma-row ${selectedGenre == "EDM" ? "bg-[#4a5878] hover:bg-[#4a5878]" : ""}`} onClick={() => setSelectedGenre('EDM')}>
                          <div className="builder_feature-10_figma-row-color purple"></div>
                          <div className="builder_feature-10_figma-row-text">
                            EDM
                          </div>
                        </a>
                        <a className={`builder_feature-10_figma-row ${selectedGenre == "POP" ? "bg-[#4a5878] hover:bg-[#4a5878]" : ""}`} onClick={() =>setSelectedGenre('POP')}>
                          <div className="builder_feature-10_figma-row-color orange"></div>
                          <div className="builder_feature-10_figma-row-text">
                            POP
                          </div>
                        </a>
                        <a className={`builder_feature-10_figma-row ${selectedGenre == "RNB" ? "bg-[#4a5878] hover:bg-[#4a5878]" : ""}`} onClick={() =>setSelectedGenre('RNB')}>
                          <div className="builder_feature-10_figma-row-color green"></div>
                          <div className="builder_feature-10_figma-row-text">
                            RNB
                          </div>
                        </a>
                      </div>
                      <div className="builder_feature-9_ui-panes z-[-1]">
                        
                        <div className={`w-tab-pane ${selectedGenre === "EDM" ? "block" : ""}`}>
                          <div className="builder_feature-9_ui-button-wrapper">
                            <div className="builder_feature-9_ui-button">
                              <div className="icon-embed-xsmall-4">
                                {/* SVG Placeholder for EDM Button Icon */}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 26 26"
                                  fill="none"
                                  preserveAspectRatio="xMidYMid meet"
                                  aria-hidden="true"
                                  role="img"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M22.2709 7.93519L22.1261 7.67657C21.9393 7.36384 21.6758 7.10391 21.3606 6.9214L14.4193 2.91798C14.105 2.73565 13.7482 2.63931 13.3848 2.63867H13.0848C12.7214 2.63931 12.3646 2.73565 12.0503 2.91798L5.10899 6.93175C4.79551 7.11305 4.53512 7.37344 4.35382 7.68691L4.209 7.94553C4.02667 8.25985 3.93033 8.61664 3.92969 8.98001V16.9972C3.93033 17.3606 4.02667 17.7174 4.209 18.0317L4.35382 18.2903C4.53981 18.6001 4.79915 18.8595 5.10899 19.0455L12.0607 23.0489C12.3734 23.235 12.7312 23.3316 13.0951 23.3282H13.3848C13.7482 23.3276 14.105 23.2313 14.4193 23.0489L21.3606 19.0351C21.6771 18.8579 21.9386 18.5965 22.1158 18.2799L22.2709 18.0213C22.451 17.7061 22.5472 17.35 22.5502 16.9869V8.96966C22.5496 8.60629 22.4533 8.2495 22.2709 7.93519ZM13.0848 4.70762H13.3848L19.4468 8.20415L13.24 11.7834L7.03311 8.20415L13.0848 4.70762ZM14.2744 20.742L20.3261 17.2455L20.4813 16.9869V9.99379L14.2744 13.5834V20.742Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                              <div>EDM</div>
                            </div>
                          </div>
                        </div>
                        <div className={`w-tab-pane ${selectedGenre === "POP" ? "block" : ""}`}>
                          <div className="builder_feature-9_ui-button-wrapper">
                            <div
                              data-w-id="c6324c6a-ad7b-3650-d199-705470f63b5a"
                              className="builder_feature-9_ui-button is-orange"
                            >
                              <div className="icon-embed-xsmall-4 w-embed">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 26 26"
                                  fill="none"
                                  preserveAspectRatio="xMidYMid meet"
                                  aria-hidden="true"
                                  role="img"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M22.2709 7.93519L22.1261 7.67657C21.9393 7.36384 21.6758 7.10391 21.3606 6.9214L14.4193 2.91798C14.105 2.73565 13.7482 2.63931 13.3848 2.63867H13.0848C12.7214 2.63931 12.3646 2.73565 12.0503 2.91798L5.10899 6.93175C4.79551 7.11305 4.53512 7.37344 4.35382 7.68691L4.209 7.94553C4.02667 8.25985 3.93033 8.61664 3.92969 8.98001V16.9972C3.93033 17.3606 4.02667 17.7174 4.209 18.0317L4.35382 18.2903C4.53981 18.6001 4.79915 18.8595 5.10899 19.0455L12.0607 23.0489C12.3734 23.235 12.7312 23.3316 13.0951 23.3282H13.3848C13.7482 23.3276 14.105 23.2313 14.4193 23.0489L21.3606 19.0351C21.6771 18.8579 21.9386 18.5965 22.1158 18.2799L22.2709 18.0213C22.451 17.7061 22.5472 17.35 22.5502 16.9869V8.96966C22.5496 8.60629 22.4533 8.2495 22.2709 7.93519ZM13.0848 4.70762H13.3848L19.4468 8.20415L13.24 11.7834L7.03311 8.20415L13.0848 4.70762ZM14.2744 20.742L20.3261 17.2455L20.4813 16.9869V9.99379L14.2744 13.5834V20.742Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                              <div>POP</div>
                            </div>
                          </div>
                        </div>
                        <div className={`w-tab-pane ${selectedGenre === "RNB" ? "block" : ""}`}>
                          <div className="builder_feature-9_ui-button-wrapper">
                            <div
                              data-w-id="c6324c6a-ad7b-3650-d199-705470f63b60"
                              className="builder_feature-9_ui-button is-yellow"
                            >
                              <div className="icon-embed-xsmall-4 w-embed">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 26 26"
                                  fill="none"
                                  preserveAspectRatio="xMidYMid meet"
                                  aria-hidden="true"
                                  role="img"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M22.2709 7.93519L22.1261 7.67657C21.9393 7.36384 21.6758 7.10391 21.3606 6.9214L14.4193 2.91798C14.105 2.73565 13.7482 2.63931 13.3848 2.63867H13.0848C12.7214 2.63931 12.3646 2.73565 12.0503 2.91798L5.10899 6.93175C4.79551 7.11305 4.53512 7.37344 4.35382 7.68691L4.209 7.94553C4.02667 8.25985 3.93033 8.61664 3.92969 8.98001V16.9972C3.93033 17.3606 4.02667 17.7174 4.209 18.0317L4.35382 18.2903C4.53981 18.6001 4.79915 18.8595 5.10899 19.0455L12.0607 23.0489C12.3734 23.235 12.7312 23.3316 13.0951 23.3282H13.3848C13.7482 23.3276 14.105 23.2313 14.4193 23.0489L21.3606 19.0351C21.6771 18.8579 21.9386 18.5965 22.1158 18.2799L22.2709 18.0213C22.451 17.7061 22.5472 17.35 22.5502 16.9869V8.96966C22.5496 8.60629 22.4533 8.2495 22.2709 7.93519ZM13.0848 4.70762H13.3848L19.4468 8.20415L13.24 11.7834L7.03311 8.20415L13.0848 4.70762ZM14.2744 20.742L20.3261 17.2455L20.4813 16.9869V9.99379L14.2744 13.5834V20.742Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                              <div>RNB</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="w-node-c6324c6a-ad7b-3650-d199-705470f63b64-991378a5" className="builder_feature-card feature-11">
                <div className="builder_feature-top feature-11">
                  <div className="max-width-xsmall">
                    <div className="margin-bottom margin-xsmall">
                      <h3 className="heading-custom-h3">3. Discover New Music!</h3>
                    </div>
                  </div>
                </div>
                <div className="builder_feature-bottom feature-11">
                  <div className="builder_feature-11_ui muisc">
                    <div className="song mini demo">
                      <div className="columns w-row">
                        <div className="column mini w-col w-col-6"><img src="images/Webfow.png" loading="lazy" alt className="image-59 mini" />
                          <div className="div-block-30">
                            <div className="text-block-5 mini">Kids</div>
                            <div className="text-block-5 artist mini">Kyle Dixon...</div>
                          </div>
                        </div>
                        <div className="column-2 home w-col w-col-6">
                          <p className="mini"><span className="text-span-3">Moods: </span>Inspirational, awe<br /><span className="text-span-2">Context:</span> Success</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

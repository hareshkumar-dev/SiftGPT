import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { songs } from "../utils/constants";
import axios from "axios";

export default function Result() {
  const { searchText } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Spotify")

  const [finalResult, setFinalResult] = useState([]);

  useEffect(() => {
    generateResult();
    return () => {};
  }, []);

  const generateResult = async () => {
    // setIsLoading(true);
    try {

      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4.5-preview-2025-02-27",
          messages: [
            {
              role: "system",
              content: `Read the user’s input very carefully. Take into consideration every key detail, including where they are at, what just happened, their present state, what is about to happen as well as other important information.\n\nThat being said, accurately identify the user’s mood, ideal music context and ideal scenario STRICTLY  based on the following options (do not add or remove words)\n\n-\n\nMood: Happy, Sad, Calm, Energetic, Motivated, Stressed, Relaxed, Excited, Angry, Confident, Anxious, Nostalgic, Peaceful, Lonely, Hopeful, Despair, Playful, Romantic, Inspirational, Empowered, Bittersweet, Awe, Triumph, Funny, Anticipation, In Love, Euphoria, Accomplished, Overjoyed, psychedelic, defeat, Poignant Joy\n\n\n-\n\nContext: Romance, Heartbreak, Nostalgia, Empowerment, Dance, Friendship, Fantasy, Mental Health, Success, Relatable, Uplifting\n\n-\n\nIdeal Scenario: Study, Driving, Gym, Wedding, Date, Gaming, Party, Late-Night Drives, Morning Routine, Breakup, Going Out\n\n\n\nExplanation of some of the complex variables listed above. \n\nTo help you understand some of the variables, here is a short explanation of each one, to give you a better understanding of when to use them:\n\nPsychedelic - Use this when the user describes a unique, euphoric feeling they've never experienced before, similar to being high.\n\nNostalgic / Nostalgia - Use this when the user mentions something about reminiscing on the past. Example: “....looking back at the time i was young back in high school….”\n\nConfident - Use when the user describes being in a situation where they would feel confident in, without explicitly mentioning it. Example; “my hair is looking good and I just scored 99% on my exam”\n\nemotional vertigo - Feeling like the moment is too surreal to comprehend fully. Like a mix of emotions that feel so good, which you’ve never felt before. \n\nAwe - A sort of positive emotion that feels good, admirational and lost / confused + relaxed all at the same time. Example - “Looking down at NYC for the first time from the top floor of a skyscraper” Or “lifting the covers off my ferrari and seeing it for the first time, looking back on my life wondering about all the steps i took to end up in this highly desirable position!”\n\nIn love - Similar, but not to be confused with Romance. Use the ‘in love’ variable when the user describes surface-level romance such as seeing a pretty girl they like or being horny. At times, it could also mean a deeper level of romance such as being so emotionally attached to your partner.  \n\nEuphoria - Use only when the user describes being in a situation where they could possibly be so happy.\nExample: First kiss, buying a dream car, getting surprised with the gift they always wanted etc…\n\nFriendship - Use very sparingly. Only use when the user explicitly mentions that they are feeling happy around their friends.\n\nFantasy - use when the user is in a scenario where they could possibly be feeling an overload of positive emotions which they have never felt before. This is induced by the user doing or experiencing something for the first few times which they have never experienced before. Moreso towards the achievement side rather than short term pleasures. \nExample -  \n\nStudy - This includes working as well. Use this variable if the user’s situation involves an activity which requires a book, writing tools or computers. \n\nPoignant Joy - The feeling you get when you achieve something you’ve been wanting, but it doesn’t feel as fulfilling or satisfying as you expected because something still feels missing or not quite right.\nExample: \nYou recover from an illness but regret missing an important opportunity while sick.\n\nA loved one passes away, and though you're sad, reminiscing on your memories together brings comfort and teaches you to cherish moments with others.\n\nAfter achieving your dream of wealth, success, and love, you feel lost, realizing the true joy was in the journey, not the destination.\n\n\nParty - The user is possibly involved or soon to be involved in an activity which involves any of the following: celebration, dancing, music, gathering and/or social event. \n\nGoing Out - Use this variable when the user describes the scenario where they are preparing for something which involves them transporting to a new location for a particular activity. \n\nBittersweet - use this variable when the user explicitly mentions that they are in a situation where they could possibly be experiencing both positive & negative emotion. DO NOT USE this variable if the user does not specify that their situation is \n\nTranquility - A state of complete relaxation, satisfaction, and contentment, often shared with a romantic partner or family member. This feeling can also arise from experiencing nature's beauty, like a stunning beach, leaving you amazed and at peace.\nExample: \n\nLate-Night Drives - only use this when the user explicitly mentions they are going out late at night. Usually for a happy / exciting reason.\n\nYour response should be in the form of bullet points with minimum 1 and maximum 4 mood options and minimum 1 maximum 4 context options and minimum 1 maximum 4 ‘ideal scenario’ options.\n\nOrder your variable selection starting with the ones you are most confident reflect how the user feels. The most likely variable should be listed first, followed by the others in decreasing order of likelihood.\n`, // User's input from the form
            },
            {
              role: "user",
              // content: username + `suggest me with genre = ${genre}` // User's input from the form
              content: `${searchText} suggest me `, // User's input from the form
            },
          ],
          temperature: 1.43,
          max_tokens: 468,
          top_p: 0.43,
          frequency_penalty: 0,
          presence_penalty: 0,
        },
        {
          headers: {
            Authorization:
              "Bearer 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", // Replace this with your actual API key
              "Content-Type": "application/json",
          },
        }
      );

      // // Send the input to OpenAI GPT API
      // const response = await axios.post(
      //   "https://api.openai.com/v1/chat/completions",
      //   {
      //     model: "gpt-4",
      //     messages: [
      //       {
      //         role: "system",
      //         // content: `Based on the user input info, what mood and context of music would the user enjoy based on the following options: Mood: Happy, Sad, Calm, Energetic, Reflective, Motivated, Stressed, Relaxed, Excited, Angry, Confident, Anxious, Nostalgic, Peaceful, Lonely, Hopeful, Melancholic, Playful, Romantic, Inspirational. Context: Romance, Heartbreak, Nostalgia, Empowerment, Celebration, Friendship, Fantasy, Mental health. Your response should be in the form of bullet points with minimum 1 and maximum 4 mood options and minimum 1 maximum 4 context options`,
      //         // content: `Read the user’s input very carefully. Take into consideration every key detail, including where they are at, what just happened, their present state, what is about to happen as well as other important information.

      //         //   That being said, accurately identify the user’s mood, ideal music context and ideal scenario STRICTLY  based on the following options (do not add or remove words)

      //         //   Mood: Happy, Sad, Calm, Energetic, Reflective, Motivated, Stressed, Relaxed, Excited, Angry, Confident, Anxious, Nostalgic, Peaceful, Lonely, Hopeful, Despair, Playful, Romantic, Inspirational, Empowered, Bittersweet, Awe, Triumph, Funny, Anticipation, In Love, Euphoria, Accomplished, Overjoyed

      //         //   Context: Romance, Heartbreak, Nostalgia, Empowerment, Dance, Friendship, Fantasy, Mental Health, Success, Relatable, Uplifting

      //         //   Ideal Scenario: Study, Driving, Gym, Wedding, Date, Gaming, Party, Late-Night Drives, Morning Routine, Breakup, Going Out


      //         //   Your response should be in the form of bullet points with minimum 1 and maximum 4 mood options and minimum 1 maximum 4 context options and minimum 1 maximum 4 ‘ideal scenario’ options
                

      //         //   Good example output:

      //         //   Mood: Energetic, Inspirational, Inspirational
      //         //   Context: Romance
      //         //   Ideal Scenario: driving, wedding, date / post date
      //         //   `,
      //         content: `Read the user’s input very carefully. Only consider explicit details provided, including where they are, what just happened, their present state, and what is about to happen. Avoid making any assumptions or interpreting implied feelings, contexts, or scenarios.
      //           That being said, accurately identify the user’s mood, ideal music context, and ideal scenario strictly based on the following options (do not add, remove, or infer any additional words):
      //           Mood: Happy, Sad, Calm, Energetic, Reflective, Motivated, Stressed, Relaxed, Excited, Angry, Confident, Anxious, Nostalgic, Peaceful, Lonely, Hopeful, Despair, Playful, Romantic, Inspirational, Empowered, Bittersweet, Awe, Triumph, Funny, Anticipation, In Love, Euphoria, Accomplished, Overjoyed
      //           Context: Romance, Heartbreak, Nostalgia, Empowerment, Dance, Friendship, Fantasy, Mental Health, Success, Relatable, Uplifting
      //           Ideal Scenario: Study, Driving, Gym, Wedding, Date, Gaming, Party, Late-Night Drives, Morning Routine, Breakup, Going Out
      //           Your response must reflect the exact details provided in the user’s input and align strictly with the specified options. Do not infer additional meanings or emotions not explicitly stated.
      //           Your response should be in the form of bullet points with minimum 1 and maximum 4 mood options and minimum 1 maximum 4 context options and minimum 1 maximum 4 ‘ideal scenario’ options
      //           `, // User's input from the form
      //       },
      //       {
      //         role: "user",
      //         // content: username + `suggest me with genre = ${genre}` // User's input from the form
      //         content: `${searchText} suggest me `, // User's input from the form
      //       },
      //     ],
      //     temperature: 1.43,
      //     max_tokens: 468,
      //     top_p: 0.43,
      //     frequency_penalty: 0,
      //     presence_penalty: 0,
      //   },
      //   {
      //     // headers: {
      //     //   Authorization:
      //     //     "Bearer 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", // Replace this with your actual API key
      //     //   "Content-Type": "application/json",
      //     // },
      //     headers: {
      //       Authorization:
      //         "Bearer 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", // Replace this with your actual API key
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );

      // Extract and display the response to the user
      const completionText = response.data.choices[0].message.content;
      // document.getElementById('response').innerText = completionText; // Display the response in the browser
      
      const { requiredContexts, requiredMoods, requiredIdealScenario} =
        parseConditions(completionText);

      const filterSongsList = filteredSongs(requiredMoods, requiredContexts,requiredIdealScenario);


      setFinalResult(filterSongsList);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const parseConditions = (text) => {
    // Clean up the text and split by new lines or dashes
    const cleanedText = text.replace(/[\n-]+/g, ",").trim();

    // Split the text into sections based on commas
    const parts = cleanedText
      .split(",")
      .map((part) => part.trim())
      .filter((part) => part.length > 0);

    // Initialize arrays for moods and contexts
    const requiredMoods = [];
    const requiredContexts = [];
    const requiredIdealScenario = [];

    // Separate the moods and contexts based on keywords
    let isContext = false;
    let isIdealScenerio = false;
    // 
    for (const part of parts) {
      if (/^Mood:/.test(part)) {
        isContext = false;
        isIdealScenerio = false;
        requiredMoods.push(
          ...part
            .replace(/^Mood:/, "")
            .split(",")
            .map((mood) => mood.trim())
        );
      } else if (/^Context:/.test(part)) {
        isContext = true;
        isIdealScenerio = false;
        requiredContexts.push(
          ...part
            .replace(/^Context:/, "")
            .split(",")
            .map((context) => context.trim())
        );
      } else if (/^Ideal Scenario:/.test(part)) {
        isContext = false;
        isIdealScenerio = true;
        requiredIdealScenario.push(
          ...part
            .replace(/^Ideal Scenario:/, "")
            .split(",")
            .map((context) => context.trim())
        );
      } else if(isIdealScenerio){
        requiredIdealScenario.push(
          ...part.split(",").map((context) => context.trim())
        );
      } else if (isContext) {
        requiredContexts.push(
          ...part.split(",").map((context) => context.trim())
        );
      } else {
        requiredMoods.push(...part.split(",").map((mood) => mood.trim()));
      }
    }

    return {
      requiredMoods,
      requiredContexts,
      requiredIdealScenario
    };
  };

  //
  // Filter the songs based on the conditions
  const filteredSongs = (requiredMoods, requiredContexts,requiredIdealScenario) =>
  {
    return songs.filter((song) => {
      // Check if the song matches the mood condition
      const moodMatches = requiredMoods.some((mood) =>
        song.mood.includes(mood)
      );

      // Check if the song matches the context condition
      const contextMatches = requiredContexts.some((context) =>
        song.context.includes(context)
      );

      // Check if the song matches the ideal scenerios
      const idealScenerioMatches = requiredIdealScenario.some((idealScenerio) =>
        song.context.includes(idealScenerio)
      );

      // Return true if both conditions are met
      return moodMatches || contextMatches || idealScenerioMatches;
    });
  }

  return (
    <div className="page-wrapper">
      <div className="main-wrapper">
        <section className="section">
          <div className="w-layout-blockcontainer container-2 w-container">
            <h1 className="heading"><em className="italic-text">&quot;{searchText}&quot;</em></h1>

          <div className="spark-section">
            <div className="spark-container w-container">
              <div data-current="Tab 1" data-easing="ease" data-duration-in={300} data-duration-out={100} className="spark-tabs-parent w-tabs">
             <div className="spark-flat-tabs-menu w-tab-menu">
                <a data-w-tab="Tab 1" className={`spark-flat-tab w-inline-block w-tab-link ${activeTab === "Sidechayn" ? "w--current" : ""}`} onClick={() => setActiveTab("Sidechayn")}>
                  <div className="text-block-3">Sidechayn</div>
                </a>
                <a data-w-tab="Tab 2" className={`spark-flat-tab w-inline-block w-tab-link ${activeTab === "Spotify" ? "w--current" : ""} `} onClick={() => setActiveTab("Spotify")}>
                  <div className="text-block-4">Spotify</div>
                </a>
              </div>

                <div className="spark-tabs-content w-tab-content">
                  {activeTab === "Sidechayn" ? (<div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
                    <div className="w-layout-blockcontainer container w-container">
                      <a href="#" className="spark-lightbox-watch-button w-inline-block w-lightbox">
                        <div className="spark-play-icon-and-text-button">
                          <div className="spark-tiny-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.3906 22.5C17.9135 22.5 22.3906 18.0228 22.3906 12.5C22.3906 6.97715 17.9135 2.5 12.3906 2.5C6.86778 2.5 2.39062 6.97715 2.39062 12.5C2.39062 18.0228 6.86778 22.5 12.3906 22.5Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M10.3906 10.3685C10.3906 9.56982 11.2808 9.09343 11.9453 9.53647L15.1425 11.6679C15.7363 12.0638 15.7363 12.9362 15.1425 13.3321L11.9453 15.4635C11.2808 15.9066 10.3906 15.4302 10.3906 14.6315V10.3685Z" fill="currentColor" />
                            </svg></div>
                          <p className="spark-button-text">Add Playlist&nbsp;To Clarity</p>
                        </div>
                      </a>
                    </div>
                    {/* {finalResult.map((item,index) => {
                      return (<div className="div-block-29" key={index}>
                        <div className="columns w-row">
                          <div className="column w-col w-col-4"><img src="/images/Webfow.png" loading="lazy" alt className="image-59" />
                            <div className="div-block-30">
                              <div className="text-block-5">{item.songName}</div>
                              <div className="text-block-5 artist">
                              </div>
                            </div>
                          </div>
                          <div className="column-2 w-col w-col-4">
                            <p>
                              <span className="text-span-3">Moods: </span>{item.mood}<br /><span className="text-span-2">Context:</span> {item.context}  
                              <br />
                                  <span className="text-span-2">
                                    Ideal Scenario:
                                  </span>{" "}
                                  {item.idealScenario}
                            </p>
                          </div>
                          <div className="column-3 w-col w-col-4">
                            <div className="text-block-5 artist">VaporWave</div>
                          </div>
                        </div>
                        <div className="div-block-31" />
                      </div>)  
                    })} */}

                    <div className="song-container">
                    {/* {finalResult.map((item,index) => {
                      return(<div className="song" key={index}>
                        <div className="columns w-row">
                          <div className="column w-col w-col-6"><img loading="lazy" src="/images/Webfow.png" alt className="image-59" />
                            <div className="div-block-30">
                              <div className="text-block-5">{item.songName}</div>
                              <div className="text-block-5 artist">The Midnight</div>
                            </div>
                          </div>
                          <div className="column-2 w-col w-col-6">
                            <p><span className="text-span-3">Moods: </span>{item.mood}<br /><span className="text-span-2">Context:</span> {item.context}<br /><span className="text-span-2">Genres:</span> Vaporwave</p>
                          </div>
                        </div>
                      </div>)
                      })} */}



                            <div className="song">
                              <div className="columns w-row">
                                <div className="column w-col w-col-6"><img loading="lazy" src="/images/Webfow.png" alt className="image-59" />
                                  <div className="div-block-30">
                                    <div className="text-block-5">America Online</div>
                                    <div className="text-block-5 artist">The Midnight</div>
                                  </div>
                                </div>
                                <div className="column-2 w-col w-col-6">
                                  <p><span className="text-span-3">Moods: </span>Happy, Sad, Blah<br /><span className="text-span-2">Context:</span> Empowered, nostalgic<br /><span className="text-span-2">Genres:</span> Vaporwave</p>
                                </div>
                              </div>
                            </div>

                            <div className="song">
                              <div className="columns w-row">
                                <div className="column w-col w-col-6"><img loading="lazy" src="/images/Webfow.png" alt className="image-59" />
                                  <div className="div-block-30">
                                    <div className="text-block-5">America Online</div>
                                    <div className="text-block-5 artist">The Midnight</div>
                                  </div>
                                </div>
                                <div className="column-2 w-col w-col-6">
                                  <p><span className="text-span-3">Moods: </span>Happy, Sad, Blah<br /><span className="text-span-2">Context:</span> Empowered, nostalgic<br /><span className="text-span-2">Genres:</span> Vaporwave</p>
                                </div>
                              </div>
                            </div>
                    </div>
                  </div>
                  ) :(
                    <div data-w-tab="Tab 2" className="w-tab-pane w--tab-active">
                      <div className="spark-three-column-grid">
                        <div id="w-node-_482326e1-07b7-fc76-91ae-7ad7b5f7d32e-49a6dd83" className="spark-wrapped-card spark-stacked">
                          <div className="spark-card-details">

                             {finalResult.map((item,index) => {
                              return(<div className="song" key={index}>
                                <div className="columns w-row">
                                  <div className="column w-col w-col-6"><img loading="lazy" src={item.image} alt className="image-59 cursor-pointer" onClick={() => {
                                        window.open(item.link,"_blank");
                                      }} />
                                    <div className="div-block-30">
                                      <div className="text-block-5 cursor-pointer" onClick={() => {
                                        window.open(item.link,"_blank");
                                      }}>{item.songName}</div>
                                      <div className="text-block-5 artist">The Midnight</div>
                                    </div>
                                  </div>
                                  <div className="column-2 w-col w-col-6">
                                    <p><span className="text-span-3">Moods: </span>{item.mood}<br /><span className="text-span-2">Context:</span> {item.context}<br /><span className="text-span-2">Genres:</span> Vaporwave</p>
                                  </div>
                                </div>
                              </div>)
                              })}
                            {/* <div className="song">
                              <div className="columns w-row">
                                <div className="column w-col w-col-6"><img loading="lazy" src="/images/Webfow.png" alt className="image-59" />
                                  <div className="div-block-30">
                                    <div className="text-block-5">America Online</div>
                                    <div className="text-block-5 artist">The Midnight</div>
                                  </div>
                                </div>
                                <div className="column-2 w-col w-col-6">
                                  <p><span className="text-span-3">Moods: </span>Happy, Sad, Blah<br /><span className="text-span-2">Context:</span> Empowered, nostalgic<br /><span className="text-span-2">Genres:</span> Vaporwave</p>
                                </div>
                              </div>
                            </div>
                            <div className="song">
                              <div className="columns w-row">
                                <div className="column w-col w-col-6"><img loading="lazy" src="/images/Webfow.png" alt className="image-59" />
                                  <div className="div-block-30">
                                    <div className="text-block-5">America Online</div>
                                    <div className="text-block-5 artist">The Midnight</div>
                                  </div>
                                </div>
                                <div className="column-2 w-col w-col-6">
                                  <p><span className="text-span-3">Moods: </span>Happy, Sad, Blah<br /><span className="text-span-2">Context:</span> Empowered, nostalgic<br /><span className="text-span-2">Genres:</span> Vaporwave</p>
                                </div>
                              </div>
                            </div>
                            <div className="song">
                              <div className="columns w-row">
                                <div className="column w-col w-col-6"><img loading="lazy" src="/images/Webfow.png" alt className="image-59" />
                                  <div className="div-block-30">
                                    <div className="text-block-5">America Online</div>
                                    <div className="text-block-5 artist">The Midnight</div>
                                  </div>
                                </div>
                                <div className="column-2 w-col w-col-6">
                                  <p><span className="text-span-3">Moods: </span>Happy, Sad, Blah<br /><span className="text-span-2">Context:</span> Empowered, nostalgic<br /><span className="text-span-2">Genres:</span> Vaporwave</p>
                                </div>
                              </div>
                            </div>
                            <div className="song">
                              <div className="columns w-row">
                                <div className="column w-col w-col-6"><img loading="lazy" src="/images/Webfow.png" alt className="image-59" />
                                  <div className="div-block-30">
                                    <div className="text-block-5">America Online</div>
                                    <div className="text-block-5 artist">The Midnight</div>
                                  </div>
                                </div>
                                <div className="column-2 w-col w-col-6">
                                  <p><span className="text-span-3">Moods: </span>Happy, Sad, Blah<br /><span className="text-span-2">Context:</span> Empowered, nostalgic<br /><span className="text-span-2">Genres:</span> Vaporwave</p>
                                </div>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
            <a href="#" target="_blank" className="clone-action w-inline-block">
              <div className="icon-clone w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--heroicons" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                  <g fill="currentColor">
                    <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" />
                    <path d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434a9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" />
                  </g>
                </svg></div>
              <div className="menu-action-text">Copy Link To This Playlist</div>
            </a>
          </div>


          </div>
        </section>

        {isLoading && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 "
            id="loadingScreen"
          >
            <div className="text-white text-3xl">Fetching...</div>
          </div>
        )}
      </div>
    </div>
  );
}

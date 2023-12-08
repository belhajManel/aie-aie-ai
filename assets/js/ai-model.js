const DEPLOYMENT_NAME = "806ucf47bd2mammkwlhsvo2p41yfvkbl";
const API_KEY = "5e23478df3ef42eb9abe7000d0825310";
const API_VERSION = "2023-09-01-preview";
const RESSSOURCE_NAME = "axo-openai-nuitinfo";

const url = `https://${RESSSOURCE_NAME}.openai.azure.com/openai/deployments/${DEPLOYMENT_NAME}/chat/completions?api-version=${API_VERSION}`;

let writing_style;

const cssElements = {
  cssVariables: {
    "body.dark-theme": {
      "--first-color-second": "hsl(var(--hue-color), 54%, 12%)",
      "--title-color": "hsl(var(--hue-color), 24%, 95%)",
      "--text-color": "hsl(var(--hue-color), 8%, 75%)",
      "--input-color": "hsl(var(--hue-color), 29%, 16%)",
      "--body-color": "hsl(var(--hue-color), 29%, 12%)",
      "--scroll-bar-color": "hsl(var(--hue-color), 12%, 48%)",
      "--scroll-thumb-color": "hsl(var(--hue-color), 12%, 36%)",
    },
    "--body-font": '"Open Sans", sans-serif',
    "--title-font": '"Raleway", sans-serif',
    "--first-color": "hsl(var(--hue-color), 64%, 22%)",
    "--first-color-second": "hsl(var(--hue-color), 64%, 22%)",
    "--first-color-alt": "hsl(var(--hue-color), 64%, 15%)",
    "--title-color": "hsl(var(--hue-color), 64%, 18%)",
    "--text-color": "hsl(var(--hue-color), 24%, 35%)",
    "--text-color-light": "hsl(var(--hue-color), 8%, 60%)",
    "--input-color": "hsl(var(--hue-color), 24%, 97%)",
    "--body-color": "hsl(var(--hue-color), 100%, 99%)",
    "--white-color": "#fff",
    "--scroll-bar-color": "hsl(var(--hue-color), 12%, 90%)",
    "--scroll-thumb-color": "hsl(var(--hue-color), 12%, 75%)",
  },
  selectors: {
    "h1, h2, h3": {
      color: "var(--title-color)",
      "font-weight": "var(--font-semi-bold)",
      "font-family": "var(--title-font)",
    },
    ".nav__logo, .nav__toggle": {
      color: "var(--white-color)",
    },
  },
};

const data_css = {
  messages: [
    {
      role: "system",
      content: "You are a web designer. Answer as if you are updating styles.",
    },
    {
      role: "user",
      content: `These are the old css style update them for the Matrix theme. : ${JSON.stringify(
        cssElements
      )}`,
    },
  ],
};

const data_text = {
  messages: [
    {
      role: "system",
      content: `Prompt to update website text content. Answer as if you are updating text content styling to match a ${writing_style}.`,
    },
    {
      role: "user",
      content: `These are the old text content: Update them to match a content writing style of ${writing_style} , old data: ${JSON.stringify(
        cssElements
      )}`,
    },
  ],
};

let data = data_css;

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "api-key": API_KEY,
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((result) => {
    // Handle the result here
    console.log(result);
    console.log("***************");
    console.log(result.choices[0].message);
    console.log("***************");
    console.log(result.choices[0].content_filter_result);
  })
  .catch((error) => {
    // Handle errors here
    console.error("Error:", error);
  });

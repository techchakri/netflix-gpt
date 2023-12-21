export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAnFBMVEX/AAz/////AAD8////AAb///v8+vP75t38/vz7//v9IyH8d2f9tab5yLj7wbP8koD8Lhz7UkL9qJz6xLP8qpr8Rjr8Z1j67eH7//f6m4f8HQX9zsT7kYb5+Oz5Qyz64tb91s77mo39iX/7PzH6f3L7vbT8iXn7em37b1/7PSf62c388+z6gWv9Ukv9Nyv5hnH7XE360sL7pI/6UDa1zKsZAAACUUlEQVRoge2Y23qaQBSFnT2AUgngCRSMSjUWIR6w7/9uBYI6NjEdvpm0vVj/lRfOWnPezOp0AAAAAAAAAAAAAAAA4D/GoBotWq2liPrOk+v5GuyJBsPRaDyR96cgZBXTGRmq5lFcS7HYkLSnOX9rYfJYcfQ0sBot9ryQ0qLAZBf4UMne6HSvUmwpNZG0urUwLbkeP5JKmMB3CSla98QmcyX3pSiVybhvuNjkRcHdoJ4wkp4t4769c1fZd4ZvCko9LuPev3N3lMZuiVLPElL3HWZbpXVfiVJPMlLkCi3ySOW+oR/CPPZSKfeDdd0rXOaUfKZV8GYmTbmh1xfUxTxRvOsMI7tIxbK3Nu3cyp9ngXKZIUrycvZ5OGtRZmiSeq97HSXWoENwPAZ+q3pV12TVAqddCgAAAAAAgH+HtgSs+kZv+YFMdHJHUs84CS1/0sqfaODajNl9Hfa0ya2lF8lKld6jafWU5aGO+G9i11HATGYly//0s8srWia7+KPguFGbDhefdqBKW0/O9PaCL3S4z69ydrE5fPxGq7Z4FIxDITSyX5SCiAYjKm6SPC+8/eEtByajpPl52Htx1xYDoOKk5yVJ0dgW4xgWrpxZf7/4VuEvTq9DN8vv/sD4MtV43NeuMCyz6YtZYTPO2e/EgTbvinJRz/k7kw/h3XOk1buivG42sfXYtNluXSdofTFK+tP6GOf2Q/98ed77X5halJt7lybxuzUwrbCYp7uvD0zqI7YLtonjFqssi0dO4qU/o78Z1VxO+RVkRAAAAAAAAAAAdPMLe64dH0Hj1kgAAAAASUVORK5CYII=";

export const BG_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY
    }
}

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [{
  identifier: "en",
  name: "English"
},
{
  identifier: "hindi",
  name: "Hindi"
},
{
  identifier: "telugu",
  name: "Telugu"
},
{
  identifier: "spanish",
  name: "Spanish"
},
{
  identifier: "german",
  name: "German"
}]

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY
export interface Suggestions {
    value: string;
    relevance: number;
    type: string;
    serpapi_link: string;
  }
  
  interface SearchMetadata {
    id: string;
    status: string;
    json_endpoint: string;
    created_at: string;
    processed_at: string;
    google_autocomplete_url: string;
    raw_html_file: string;
    prettify_html_file: string;
    total_time_taken: number;
  }
  
  interface SearchParameters {
    engine: string;
    q: string;
  }
  
  interface SearchInformation {
    autocomplete_results_state: string;
  }
  
  export interface AutoCompleteApiResponse {
    search_metadata: SearchMetadata;
    search_parameters: SearchParameters;
    search_information: SearchInformation;
    suggestions: Suggestions[];
    verbatim_relevance: number;
  }
  
  export const mockData = {
    search_metadata: {
      id: "647daf55f2180143bd2b62b0",
      status: "Success",
      json_endpoint:
        "https://serpapi.com/searches/b8c43f487e63cff5/647daf55f2180143bd2b62b0.json",
      created_at: "2023-06-05 09:48:05 UTC",
      processed_at: "2023-06-05 09:48:05 UTC",
      google_autocomplete_url:
        "https://www.google.com/complete/search?q=coffee&client=chrome",
      raw_html_file:
        "https://serpapi.com/searches/b8c43f487e63cff5/647daf55f2180143bd2b62b0.html",
      prettify_html_file:
        "https://serpapi.com/searches/b8c43f487e63cff5/647daf55f2180143bd2b62b0.prettify",
      total_time_taken: 0.27,
    },
    search_parameters: {
      engine: "google_autocomplete",
      q: "coffee",
    },
    search_information: {
      autocomplete_results_state: "Showing completion results.",
    },
    suggestions: [
      {
        value: "coffee near me",
        relevance: 1250,
        type: "QUERY",
        serpapi_link:
          "https://serpapi.com/search.json?engine=google_autocomplete&q=coffee+near+me",
      },
      {
        value: "coffee nearby",
        relevance: 601,
        type: "QUERY",
        serpapi_link:
          "https://serpapi.com/search.json?engine=google_autocomplete&q=coffee+nearby",
      },
      {
        value: "going to the coffee shops near me",
        relevance: 600,
        type: "QUERY",
        serpapi_link:
          "https://serpapi.com/search.json?engine=google_autocomplete&q=coffee+shops+near+me",
      },
      {
        value: "coffee shop",
        relevance: 561,
        type: "QUERY",
        serpapi_link:
          "https://serpapi.com/search.json?engine=google_autocomplete&q=coffee+shop",
      },
      {
        value: "coffee table",
        relevance: 560,
        type: "QUERY",
        serpapi_link:
          "https://serpapi.com/search.json?engine=google_autocomplete&q=coffee+table",
      },
      {
        value: "coffee maker",
        relevance: 559,
        type: "QUERY",
        serpapi_link:
          "https://serpapi.com/search.json?engine=google_autocomplete&q=coffee+maker",
      },
      {
        value: "coffee bean",
        relevance: 558,
        type: "QUERY",
        serpapi_link:
          "https://serpapi.com/search.json?engine=google_autocomplete&q=coffee+bean",
      },
      {
        value: "coffee grinder",
        relevance: 557,
        type: "QUERY",
        serpapi_link:
          "https://serpapi.com/search.json?engine=google_autocomplete&q=coffee+grinder",
      },
      {
        value: "coffee meets bagel",
        relevance: 556,
        type: "QUERY",
        serpapi_link:
          "https://serpapi.com/search.json?engine=google_autocomplete&q=coffee+meets+bagel",
      },
      {
        value: "coffee cake recipe",
        relevance: 555,
        type: "QUERY",
        serpapi_link:
          "https://serpapi.com/search.json?engine=google_autocomplete&q=coffee+cake+recipe",
      },
      {
        value: "coffee machine",
        relevance: 554,
        type: "QUERY",
        serpapi_link:
          "https://serpapi.com/search.json?engine=google_autocomplete&q=coffee+machine",
      },
      {
        value: "coffee places near me",
        relevance: 553,
        type: "QUERY",
        serpapi_link:
          "https://serpapi.com/search.json?engine=google_autocomplete&q=coffee+places+near+me",
      },
      {
        value: "coffee cake",
        relevance: 552,
        type: "QUERY",
        serpapi_link:
          "https://serpapi.com/search.json?engine=google_autocomplete&q=coffee+cake",
      },
      {
        value: "coffee creamer",
        relevance: 551,
        type: "QUERY",
        serpapi_link:
          "https://serpapi.com/search.json?engine=google_autocomplete&q=coffee+creamer",
      },
      {
        value: "coffee bar",
        relevance: 550,
        type: "QUERY",
        serpapi_link:
          "https://serpapi.com/search.json?engine=google_autocomplete&q=coffee+bar",
      },
    ],
    verbatim_relevance: 1300,
  };
  
  export async function fetchData  (): Promise<AutoCompleteApiResponse> {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData);
      }, 0); // Simulating a delay of 1 second
    });
  }
  
import { fetchData } from './autocompleteAPI';
import type { AutoCompleteApiResponse } from './autocompleteAPI';

describe('fetchData', () => {
  it('fetches data correctly', async () => {
    const result: AutoCompleteApiResponse = await fetchData();

    expect(result).toBeDefined();
    expect(result.search_metadata).toBeDefined();
    expect(result.search_parameters).toBeDefined();
    expect(result.search_information).toBeDefined();
    expect(result.suggestions).toBeDefined();
    expect(result.verbatim_relevance).toBeDefined();
  });
});

const {get_user_loca, fetchRequestImages, generateMarkers} = require('./tests');
//Mock the fetch function globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ latitude: "40.7128", longitude: "-74.0060" }), // Mocking a response for get_user_loca
    text: () => Promise.resolve("Marker generated"), // Mocking a response for generateMarkersEmpty
  })
);

describe('Test functions', () => {

  test('get_user_loca should return true', async () => {
    const result = await get_user_loca();
    expect(result).toBe(true);
  });

  test('fetchRequestImages should return true', async () => {
    const result = await fetchRequestImages('testImage');
    expect(result).toBe(true);
  });

  test('generateMarkers should return true', async () => {
    const result = await generateMarkers();
    expect(result).toBe(true);
  });

});

export interface Hotness {
  name: string | null;
  thumbnail: string | null;
  yearpublished: string | null;
}

export const getHotness = (res: any) => {
  const text = res.data;
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(text, "text/xml");

  const items = xmlDoc.getElementsByTagName("item");

  // Transform items into an array of Hotness objects
  const hotnessArray: Hotness[] = [];
  for (let i = 0; i < items.length; i++) {
    const gameName = items[i]
      .getElementsByTagName("name")[0]
      .getAttribute("value");
    const gameThumbnail = items[i]
      .getElementsByTagName("thumbnail")[0]
      .getAttribute("value");
    const year = items[i]
      .getElementsByTagName("yearpublished")[0]
      .getAttribute("value");
    const hotnessObj: Hotness = {
      name: gameName,
      thumbnail: gameThumbnail,
      yearpublished: year,
    }; // Modify this based on the actual properties of Hotness
    hotnessArray.push(hotnessObj);
  }
  return hotnessArray;
};

export interface Hotness {
  name: string | null;
  thumbnail: string | null;
  yearpublished: string | null;
}

export function xml2Obj<T>(res: any, list: (keyof T)[]) {
  const text = res.data;
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(text, "text/xml");

  const items = xmlDoc.getElementsByTagName("item");

  // Transform items into an array of Hotness objects
  const hotnessArray: T[] = [];

  for (let i = 0; i < items.length; i++) {
    const obj: Partial<T> = {};
    list.forEach((comp) => {
      obj[comp] = (items[i]
        .getElementsByTagName(comp as string)[0]
        ?.getAttribute("value") || null) as T[keyof T] | undefined;
    });

    hotnessArray.push(obj as T);
  }
  return hotnessArray;
}

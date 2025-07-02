import type { Item } from "~~/types";

export const useStoryStore = () => {
  const stories = useState("stories", () => [] as Item[]);
  const tenRandomStories = useState("tenRandomStories", () => [] as Item[]);
  const scrollY = useState("storiesScrollY", () => 0);

  const fetchStories = async () => {
    const { data } = await useFetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json"
    );
    stories.value = data.value.map((id) => ({
      id,
    }));

    tenRandomStories.value = pickRandomStories(data.value, 10).values.map(
      (id) => ({
        id,
      })
    );

    if (tenRandomStories.value.length > 0) {
      tenRandomStories.value.forEach((element, index) => {
        fetchStoryDetails(element.id)
          .then((result) => {
            tenRandomStories.value[index] = {
              ...tenRandomStories.value[index],
              authorId: result.by,
              score: result.score,
              timeStamp: formatTimestamp(result.time),
              title: result.title,
              url: result.url,
            };
          })
          .catch((error) => {
            console.error(error);
          });
      });
    } else {
      console.warn("No stories to fetch");
    }
  };

  async function fetchStoryDetails(storyId: number) {
    const { data } = await useFetch(
      `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
    );

    return data.value;
  }

  function pickRandomStories<T>(arr: T[], count: number = 10): { values: T[] } {
    const indices: number[] = [];
    while (indices.length < count) {
      const randIndex = Math.floor(Math.random() * arr.length);
      indices.push(randIndex);
    }
    const values = indices.map((i) => arr[i]);
    return { values };
  }

  function formatTimestamp(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  }

  return {
    stories,
    tenRandomStories,
    fetchStories,
    scrollY,
  };
};

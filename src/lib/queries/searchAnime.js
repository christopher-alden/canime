import { gql } from "@apollo/client";

export const SEARCH_ANIME = gql`
query SearchAnime($search: String!) {
  Page(page: 1, perPage: 50) {
    media(search: $search, type: ANIME, sort:POPULARITY_DESC, isAdult:false) {
      id
      coverImage {
        large
      }
      title {
        romaji
        english
      }
      status
      episodes
      description
      status
        airingSchedule{
          nodes{
            id
            episode
            airingAt
            timeUntilAiring
          } 
        }
    }
  }
}`
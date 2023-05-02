import {gql} from "@apollo/client";

export const GET_SLIDER = gql`
  query getCurrRelease($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media(type: ANIME, season: SPRING, seasonYear: 2023, sort: POPULARITY_DESC, status: RELEASING) {
        id
        coverImage {
          large
        }
        bannerImage
        title {
          romaji
          english
        }
        episodes
        description
        genres
      }
    }
  }
`

export const GET_CURR_RELEASE = gql`
  query getCurrRelease($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media(type: ANIME, season: SPRING, seasonYear: 2023, sort: POPULARITY_DESC, status: RELEASING) {
        id
        coverImage {
          large
        }
        bannerImage
        title {
          romaji
          english
        }
        episodes
        description
        genres
      }
    }
  }`

export const GET_TOP_10 = gql`
  query getCurrRelease{
    Page(page: 1, perPage: 10) {
      media(type: ANIME, sort: TRENDING_DESC) {
        id
        coverImage {
          large
        }
        bannerImage
        title {
          romaji
          english
        }
        episodes
      }
    }
  }`

export const GET_TOP_ANIME = gql`
query getTopAnime($page:Int, $perPage:Int){
    Page(page:$page,perPage:$perPage){
      media(type:ANIME, sort:POPULARITY_DESC){
        id
        coverImage{
          large
        }
        title{
          romaji
          english
        }
        episodes
      }
    }
  }`

export const GET_DETAILS = gql`
query details($mediaId: Int) {
  Media(id: $mediaId) {
    id
    coverImage {
      large
    }
    title {
      romaji
      english
      native
    }
    bannerImage
		startDate {
		  year
		  month
		  day
		}
    status
    episodes
    duration
    genres
    description
    format
    airingSchedule{
      nodes{
        id
        episode
        airingAt
        timeUntilAiring
      } 
    }
    averageScore
    popularity
  }
}`

export const GET_ROMANCE = gql`
query romanceAnime($page:Int, $perPage:Int){
  Page(page:$page,perPage:$perPage) {
    media( type: ANIME, genre:"romance",sort:SCORE_DESC) {
      id
      coverImage {
        large
      }
      title {
        romaji
        english
      }
      episodes
    }
  }
}`

export const GET_YBBA = gql`
query lolAnime($page:Int, $perPage:Int){
  Page(page:$page,perPage:$perPage) {
    media( type: ANIME, tag:"Isekai", sort:SCORE_DESC) {
      id
      coverImage {
        large
      }
      title {
        romaji
        english
      }
      episodes
    }
  }
}`

export const GET_SOL = gql`
query SOLAnime($page:Int, $perPage:Int){
  Page(page:$page,perPage:$perPage) {
    media( type: ANIME, genre:"Slice of Life",sort:FAVOURITES_DESC) {
      id
      coverImage {
        large
      }
      title {
        romaji
        english
      }
      episodes
    }
  }
}`

export const GET_SPORTS = gql`
query sportsAnime($page:Int, $perPage:Int){
  Page(page:$page,perPage:$perPage){
    media( type: ANIME, genre:"Sports",sort:POPULARITY_DESC) {
      id
      coverImage {
        large
      }
      title {
        romaji
        english
      }
      episodes
    }
  }
}`
export const GET_UPCOMING = gql`
query upcomingAnime($page:Int, $perPage:Int){
  Page(page:$page,perPage:$perPage){
    media( type: ANIME, status:NOT_YET_RELEASED,sort:POPULARITY_DESC) {
      id
      coverImage {
        large
      }
      title {
        romaji
        english
      }
      episodes
    }
  }
}`
export const GET_HORROR = gql`
query horrorAnime($page:Int, $perPage:Int){
  Page(page:$page,perPage:$perPage){
    media( type: ANIME, genre:"Horror" ,sort:POPULARITY_DESC) {
      id
      coverImage {
        large
      }
      title {
        romaji
        english
      }
      episodes
    }
  }
}`
export const GET_FISH = gql`
query fishingAnime($page:Int, $perPage:Int){
  Page(page:$page,perPage:$perPage){
    media( type: ANIME, tag:"Fishing" ,sort:TRENDING) {
      id
      coverImage {
        large
      }
      title {
        romaji
        english
      }
      episodes
    }
  }
}`
export const GET_CUTE = gql`
query cuteAnime($page:Int, $perPage:Int){
  Page(page:$page,perPage:$perPage){
    media( type: ANIME, tag:"Cute Girls Doing Cute Things" ,sort:POPULARITY_DESC) {
      id
      coverImage {
        large
      }
      title {
        romaji
        english
      }
      episodes
    }
  }
}`
export const GET_MG = gql`
query mgAnime($page:Int, $perPage:Int){
  Page(page:$page,perPage:$perPage){
    media( type: ANIME, genre:"Mahou Shoujo" ,sort:POPULARITY_DESC) {
      id
      coverImage {
        large
      }
      title {
        romaji
        english
      }
      episodes
    }
  }
}`
export const GET_IDOL = gql`
query idolAnime($page:Int, $perPage:Int){
  Page(page:$page,perPage:$perPage){
    media( type: ANIME, tag:"Idol" ,sort:POPULARITY_DESC) {
      id
      coverImage {
        large
      }
      title {
        romaji
        english
      }
      episodes
    }
  }
}`

export const GET_RECOM = gql`
query recomAnime($search: String!) {
  anime: Media(search: $search, type: ANIME) {
    recommendations(page: 1, perPage: 15 sort:RATING_DESC) {
      nodes {
        mediaRecommendation {
          id
          title {
            romaji
            english
          }
          coverImage {
            large
          }
          episodes
        }
      }
    }
  }
}`


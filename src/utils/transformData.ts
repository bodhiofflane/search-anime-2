
import {AnimeList, Pagination, AnimeItem} from '../Types/Anime';

// 1) Трансформация данных для одного аниме. Пойдет на страницу для отдельного аниме.
export type AnimeItemLocal = ReturnType<typeof transformAnimeItem>;

export const transformAnimeItem = (data: AnimeItem) => {
  return {
    id: data.mal_id,
    urlMyAnimeList: data.url,
    imgs: {
      imgSmallJpg: data.images.jpg.small_image_url,
      imgLargeJpg: data.images.jpg.large_image_url,
      imgSmallWebp: data.images.webp.small_image_url,
      imgLargeWebp: data.images.webp.large_image_url,
    },
    trailer: {
      embedUrl: data.trailer.embed_url,
      url: data.trailer.url,
    },
    approved: data.approved,
    title: data.title,
    titles: data.titles,
    type: data.type,
    source: data.source,
    episodes: data.episodes,
    status: data.status,
    airing: data.airing,
    aired: {
      from: data.aired.from,
      to: data.aired.to,
      string: data.aired.prop.string,
    },
    duration: data.duration,
    ageRating: data.rating,
    score: data.score,
    scoredBy: data.scored_by,
    rank: data.rank,
    popularity: data.popularity,
    members: data.members,
    favorites: data.favorites,
    synopsis: data.synopsis,
    background: data.background,
    broadcastSeason: data.season,
    year: data.year,
    broadcast: data.broadcast,
    producers: data.producers.map((produser) => ({
      id: produser.mal_id,
      type: produser.type,
      name: produser.name,
      url: produser.url,
    })),
    licensors: data.licensors.map((licensor) => ({
      id: licensor.mal_id,
      type: licensor.type,
      name: licensor.name,
      url: licensor.url,
    })),
    studios: data.studios.map((studio) => ({
      id: studio.mal_id,
      type: studio.type,
      name: studio.name,
      url: studio.url,
    })),
    genres: data.genres.map((genre) => ({
      id: genre.mal_id,
      type: genre.type,
      name: genre.name,
      url: genre.url,
    })),
    themes: data.themes.map((theme) => ({
      id: theme.mal_id,
      type: theme.type,
      name: theme.name,
      url: theme.url,
    })),
    demographics: data.themes.map((demographic) => ({
      id: demographic.mal_id,
      type: demographic.type,
      name: demographic.name,
      url: demographic.url,
    })),
  }
};

// 2) Трансформация пагинации. Используется только при получении списка.
//export type PaginationLocal = ReturnType<typeof transformPagination>;

const transformPagination = (pagination: Pagination) => {
  return {
    lastVisiblePage: pagination.last_visible_page,
    hasNextPage: pagination.has_next_page,
    currentPage: pagination.current_page,
    totalItem: pagination.items.total,
    perPage: pagination.items.per_page,
  };
};


// 3) Трансформация данных списка аниме. Будет использоваться упрощенная версия данных.
export type AnimeListWithPaginationLocal = ReturnType<typeof transformAnimeListWithPagination>;

export const transformAnimeListWithPagination = (animeList: AnimeList) => {
  return {
    animeList: animeList.data.map((anime) => ({
      id: anime.mal_id,
      title: anime.title,
      imgs: {
        imgSmallJpg: anime.images.jpg.small_image_url,
        imgLargeJpg: anime.images.jpg.large_image_url,
        imgSmallWebp: anime.images.webp.small_image_url,
        imgLargeWebp: anime.images.webp.large_image_url,
      },
      trailerImgs: {
        smallImg: anime.trailer.images.large_image_url,
        largeImg: anime.trailer.images.maximum_image_url,
      },
      aired: {
        from: anime.aired.from,
        to: anime.aired.to,
        string: anime.aired.prop.string,
      },
      type: anime.type,
      score: anime.score,
      demographics: anime.demographics.map((demographic) => {
        return {
          id: demographic.mal_id,
          name: demographic.name,
        };
      }),
    })),
    pagination: transformPagination(animeList.pagination),
  };
};

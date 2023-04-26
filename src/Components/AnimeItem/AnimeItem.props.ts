export type AnimeCardProps = {
  id: number;
  title: string;
  imgs: {
    imgSmallJpg: string;
    imgLargeJpg: string;
    imgSmallWebp: string;
    imgLargeWebp: string;
  };
  trailerImgs: {
    smallImg: string;
    largeImg: string;
  };
  aired: {
    from: string;
    to: string;
    string: string;
  };
};
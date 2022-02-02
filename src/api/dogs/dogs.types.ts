export type GetBreedsResponse = {
  message: {
    [key: string]: string[];
  };
};

export type GetRandomImageByBreedResponse = {
  message: string;
  status: string;
};

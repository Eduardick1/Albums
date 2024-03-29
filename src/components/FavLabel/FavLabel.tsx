import React, { memo } from "react";
import { IPhoto } from "../../utils/types";
import { Label } from "./FavLabel.styled";
import { useAppSelector } from "../../Redux/store";

const FavLabel = memo(
  ({ id, dispatch }: Pick<IPhoto, "id"> & { dispatch: () => void }) => {
    const favorites = useAppSelector((state) => state.favorites);
    const isFav = !!favorites.find((photo) => photo.id === id);
    return (
      <Label onClick={dispatch}>
        <svg
          style={isFav ? { fill: "#FFAF37" } : { fill: "#D0D0D0" }} // some error during dev, thats why i didnt use styled props
          width="18"
          height="18"
          viewBox="0 0 18 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.0868 1.04641C8.43933 0.256421 9.56067 0.25642 9.9132 1.0464L11.9048 5.50932L16.767 6.02193C17.628 6.1127 17.9746 7.1804 17.3311 7.75964L13.7 11.0284L14.7145 15.8063C14.8943 16.6527 13.9869 17.3124 13.2371 16.8805L9 14.4393L4.76287 16.8805C4.01306 17.3124 3.10573 16.6527 3.28547 15.8063L4.3 11.0284L0.668853 7.75964C0.0253845 7.1804 0.372042 6.1127 1.23305 6.02193L6.09524 5.50932L8.0868 1.04641Z" />
        </svg>
      </Label>
    );
  }
);

export default FavLabel;

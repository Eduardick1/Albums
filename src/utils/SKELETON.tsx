import { CSSProperties } from "react";
import styled, { keyframes } from "styled-components";

interface ISKELETON {
  number: number;
  css?: CSSProperties;
}

const SKELETON_LOADING = keyframes`
  from {
    background-color: #edf9ff;
  }

  to {
    background-color: lightblue;
  }
`;
const SkeletonBlock = styled.div`
  @keyframes SKELETON_LOADING {
    0% {
    }
    100% {
    }
  }
  border-radius: "1rem";
  animation: ${SKELETON_LOADING} 1s linear infinite alternate;
`;

export default function PRE_LOADER_SKELETON({ number, css }: ISKELETON) {
  return (
    <>
      {Array(number)
        .fill(" ")
        .map((block, index) => (
          <SkeletonBlock
            style={{
              ...css,
            }}
            key={index + "skeleton"}
          >
            {block}
          </SkeletonBlock>
        ))}
    </>
  );
}

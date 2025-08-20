
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import styled, { createGlobalStyle,css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
}
body{
  background-color: #121212;
}
`;

export const flexMixin = ({
  direction = "row",
  justify = "flex-start",
  align = "stretch",
  gap = 0,
  wrap = "nowrap",
} = {}) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
  gap: ${typeof gap === "number" ? `${gap}px` : gap};
  flex-wrap: ${wrap};
`;


export const fontMixin = (size = "16px", weight = 400) => css`
  font-size: ${size};
  font-weight: ${weight};
`;

const tag_Color = "#d7fa00";
const gray = "rgb(160, 160, 160)";

export const HeaderContainer = styled.header`
  ${flexMixin({ justify: "space-between", align: "center" })}
  padding: 10px 20px;
  background-color: black;

  ul{
    ${flexMixin({ justify: "center", align: "center", gap: 20 })}
    margin: 0;
    padding: 0;

    li{
      ${fontMixin("13px", 400)}
      list-style: none;
      color: white;
    }
  }
`;

export const Section = styled.section`
  ${flexMixin({ justify: "center", align: "center", wrap: "wrap", gap: 20 })}
  padding: 20px 40px;
`;

export const ContentContainer = styled.div`
  ${flexMixin({ direction: "column", align: "flex-start", gap: 5 })}

  img{
    width: 300px;
    border-radius: 10px;
    margin-bottom: 3px;
    min-height: 225px;
    object-fit: cover;
  }

  span{
    ${fontMixin("12px")}
    color: ${tag_Color};
    border: 1px solid ${tag_Color};
    padding: 4px 5px;
    border-radius: 3px;
  }
  
  div{
    ${fontMixin("18px", 600)}
  }

  p{
    ${fontMixin("12px")}
    color: ${gray};
  }
`;

function App() {
  return (
    <main>
      <GlobalStyle />
      <Header />
      <Section>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </Section>
    </main>
  );
}

export default App;

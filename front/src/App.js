import React, { useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const onChange = (e) => {
  console.log(e.target.value);
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => (props.bgColor ? '#c8d6e5' : '#ffffff')};
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 700px;
`;
const SearchBar = styled.input`
  width: 334px;
  height: 37px;
  border: 2px solid #b2a7e8;
  border-radius: 10px;
  font-size: 1rem;
  padding: 1px 3 px;
  &:focus {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    font-weight: bold;
    outline: none;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  margin-left: 410px;
  width: 58px;
  height: 41px;
  text-align: center;
  background: #b2a7e8;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-weight: bold;
  font-size: 18px;
`;

function App({ onSearch }) {
  const inputRef = useRef();
  const onClick = () => {
    console.log('onClick Active');
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  // const [ref, { width, height }] = useDimensions();
  // // we use a ref to access the canvas' DOM node
  // const canvasRef = React.createRef();

  // React.useEffect(() => {
  //   const context = canvasRef.current.getContext('2d');
  //   // moving our hand to the starting position
  //   context.moveTo(width / 4, height / 2);
  //   // drawing the blueprint line to the finishing position
  //   context.lineTo((width * 3) / 4, height / 2);
  //   // taking a purple pen and coloring the line
  //   context.strokeStyle = 'purple';
  //   context.stroke();
  // }, [canvasRef, width, height]);
  return (
    <>
      {/* <main ref={ref}>
        <canvas ref={canvasRef} height={height} width={width} />
      </main> */}
      {/* <canvas class='zdog-canvas' width='300' height='100'></canvas>  */}
      <GlobalStyle bgColor />
      <Container>
        <SearchBar onChange={onChange} onKeyPress={onKeyPress} ref={inputRef} />
        <SearchButton type='submit' onClick={onClick}>
          검색
        </SearchButton>
      </Container>
    </>
  );
}

export default App;

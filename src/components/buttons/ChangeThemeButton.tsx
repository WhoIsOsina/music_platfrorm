import styled from 'styled-components';


const Wrapper = styled.div `
    width: max(60px, 6vw);
    height: max(20px, 2vw);
    background: var(--background);
    margin-right: max(20px, 1.5vw);
    border-radius: max(20px, 2vw);
    box-shadow: 0px 0px 10px var(--color) inset;
    position: relative;
    transition: all var(--change-time);
`
const Round = styled.div `
    width: max(20px, 2vw);
    height: max(20px, 2vw);
    border-radius: 50%;
    background: var(--color);
    outline: 2px solid var(--background);
    position: absolute;
    transform: translateX(var(--position));
    transition: all var(--change-time);


`

const ChangeThemeButton = () => {

    const changeTheme = () => {
        console.log(document.documentElement.hasAttribute('theme'))
       if(document.documentElement.hasAttribute('theme')) {
        document.documentElement.removeAttribute('theme')
       } else {
        document.documentElement.setAttribute('theme', 'dark')
       }
    }
  return (
    <Wrapper onClick={changeTheme}>
        <Round></Round>
    </Wrapper>
  );
}

export default ChangeThemeButton;

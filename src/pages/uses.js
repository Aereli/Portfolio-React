import React from 'react'

class Uses extends React.Component{
  render(){
    return(
      <>
        <h1>Uses</h1>
          <p>Here's my setup and software that I use.</p>
        <h3> Editors + Terminal</h3>
        <ul>
          <li>
            <a href="https://ohmyz.sh/" target="_blank" rel="noopener noreferrer">
              ZSH
            </a> as my main terminal
          </li>
          <li>
            Chrome as my web browser
          </li>
          <li>
            <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
              Visual Studio Code
            </a>for just about everything
          </li>
        </ul>
        <h3> VSCode Extensions</h3>
        <ul>
          <li>
            <a href="https://www.nordtheme.com/ports/visual-studio-code" target="_blank" rel="noopener noreferrer">
              Nord visual theme
            </a> for VSCode
          </li>
          <li>
            <a href="https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense" target="_blank" rel="noopener noreferrer">
              Path Intellisense
            </a> plugin that autocompletes file names
          </li>
          <li>
            <a href="https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2" target="_blank" rel="noopener noreferrer">
              Bracket Pair Colorizer
            </a> allows matching brackets to be identified with colours
          </li>
          <li>
            <a href="https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets" target="_blank" rel="noopener noreferrer">
            VS Code ES7 React/Redux/React-Native/JS snippets
            </a> provides JavaScript and React/Redux snippets in ES7 
          </li>
          <li>
            <a href="https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme" target="_blank" rel="noopener noreferrer">
            Material Icon Theme 
            </a> provides lots of icons based on Material Design for Visual Studio Code.
          </li>
        </ul>
        <h3>Hardware</h3>
        <ul>
          <li>
            MacBook Pro Retina, 13-inch, Mid 2014 | 2.6 GHz Dual-Core Intel Core i5
          </li>
          <li>
            Iphone 11
          </li>
          <li>
            Apple Watch 3
          </li>
        </ul>
      </>
    )
  }
}

export default Uses
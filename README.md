<div id="top"></div>
<br />
<div align="center">
  <a href="https://setup.blacket.org">
    <img src="./assets/logo.png" alt="Logo" width="160" height="160">
  </a>
  <h3 align="center">setup.blacket.org</h3>

  <p align="center">
     Website written in React + Vite to generate a config file to setup your Blacket server instance.
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#building">Building</a>
    </li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

## Getting Started

Visit <a href="https://setup.blacket.org">setup.blacket.org</a> in your browser in order to generate a config file for your Blacket server instance.

### Prerequisites

The following packages need to be installed before building:

* NodeJS

  ```sh
  cd ~
  curl -sL https://deb.nodesource.com/setup_18.x -o /tmp/nodesource_setup.sh
  sudo bash /tmp/nodesource_setup.sh
  sudo apt install nodejs
  ```
  
### Building

1. Clone the repository into your home folder:
   ```sh
   cd /tmp
   git clone https://github.com/XoticLLC/setup.blacket.org.git
   mv -v /tmp/setup.blacket.org ~/setup.blacket.org
   ```
   
2. Move to the directory and install dependencies:
   ```sh
   cd ~/setup.blacket.org
   npm i
   ```
  
3. Build the app:
   ```sh
   npm run build
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

## License

Distributed under the GPL-3.0 License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>
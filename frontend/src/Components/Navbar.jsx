import '../App.css'
import MyWallet from './MyWallet';

function Navbar() {
  return (
    <div className="navigation">
        <a className="wallet">
          <MyWallet />
        </a>
        <a href="">My pots</a>
        <a href="">All pots</a>
        <input type="text" placeholder="Find a pot"/>
    </div>
  );
}

export default Navbar;
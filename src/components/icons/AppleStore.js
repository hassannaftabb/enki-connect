import AppleStoreIconSVG from '../../icons/apple-app-store.svg';
import { APPLE_STORE_LINK } from '../../data';

const AppleStore = () => (
    <a className='endButton no-bg' href={APPLE_STORE_LINK} target="_blank" rel="noreferrer" >
        <img src={AppleStoreIconSVG} alt="App store" width="77%" />
    </a>
)

export default AppleStore;

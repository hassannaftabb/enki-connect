import { GOOGLE_PLAY_LINK } from '../../data';
import GooglePlayIcon from '../../icons/Google_Play-Badge-Logo.svg'

const GooglePlay = () => (
    <a className='endButton no-bg' href={GOOGLE_PLAY_LINK} target="_blank" rel="noreferrer" >
        <img src={GooglePlayIcon} alt="google play store" width="100%" />
    </a>
)

export default GooglePlay;

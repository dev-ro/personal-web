import Vue from 'vue';


import { library } from '@fortawesome/fontawesome-svg-core';


import { faUserSecret, faAngleDown, faBars, faHandshake, faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faFacebookF, faTwitter, faLinkedinIn, faGithub, faSpotify  } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
    faUserSecret,
    faAngleDown,
    faDiscord, 
    faFacebookF, 
    faTwitter, 
    faLinkedinIn, 
    faGithub, 
    faSpotify,
    faHandshake,
    faCaretLeft,
    faBars
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
import Vue from 'vue';


import { library } from '@fortawesome/fontawesome-svg-core';


import { faUserSecret, faAngleDown} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
    faUserSecret,
    faAngleDown
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
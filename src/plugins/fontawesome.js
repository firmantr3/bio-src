import Vue from 'vue'
import {
    library
} from '@fortawesome/fontawesome-svg-core'
import {
    faStar,
    faEye,
    faTimes,
    faArrowUp,
    faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons'
import { 
    faGithub,
    faGitlab,
    faFacebookSquare,
    faWhatsapp,
    faLinkedin,
    faTelegram
} from '@fortawesome/free-brands-svg-icons'
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

[
    faStar,
    faEye,
    faTimes,
    faGithub,
    faGitlab,
    faFacebookSquare,
    faWhatsapp,
    faLinkedin,
    faTelegram,
    faArrowUp,
    faExternalLinkAlt
].forEach((fa) => library.add(fa))

Vue.component('font-awesome-icon', FontAwesomeIcon)

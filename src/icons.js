import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBattleNet,
  faConnectdevelop,
} from "@fortawesome/free-brands-svg-icons";
import {
  faInfoCircle,
  faPlus,
  faFileDownload,
  faRocket,
  faPaperPlane,
  faSmile,
  faSlidersH,
  faTimes,
  faSearch,
  faWindowMinimize,
  faWindowMaximize,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faInfoCircle,
  faFileDownload,
  faPlus,
  faPaperPlane,
  faSmile,
  faConnectdevelop,
  faRocket,
  faSlidersH,
  faBattleNet,
  faSearch,
  faTimes,
  faWindowMinimize,
  faWindowMaximize,
  faQuestionCircle
);
Vue.component("fa-icon", FontAwesomeIcon);

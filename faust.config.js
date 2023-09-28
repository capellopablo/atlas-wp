import { setConfig } from "@faustwp/core";
import templates from "./wp-templates";
import possibleTypes from "./possibleTypes.json";

/**
 * @type {import('@faustwp/core').FaustConfig}
 **/
export default setConfig({
  templates,
  experimentalPlugins: [],
  possibleTypes,
  blocks: [
    // Define your block configurations here
    {
      // name,
      // component: Define the path to your component
    },
    // Add more block configurations as needed
  ],
});

// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import review from "../schemas/review";
import heder from "../schemas/heder";
import sponsors from "./sponsors";
import statuss from "./statuss";
import ourservices from "./ourServices";
import oddService from "./oddService";
import third from "./third";
import fourth from "./fourth";
import five from "./five";
import six from "./six";
import cost from "./cost";
import medel from "./medel";
import footer from "./footer";
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    review,
    heder,
    sponsors,
    statuss,
    ourservices,
    oddService,
    third,
    fourth,
    five,
    six,
    cost,
    medel,
    footer,
  ]),
})

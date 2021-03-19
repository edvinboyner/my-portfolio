// Used to talk to Sanity

import sanityClient from '@sanity/client'

export default sanityClient({
    //every sanity project have a projectId located in sanity.json
    projectId: "tm6jkk8f",
    dataSet: "production"
})
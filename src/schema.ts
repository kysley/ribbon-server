// import { nexusPrismaPlugin } from 'nexus-prisma'
// import { makeSchema } from '@nexus/schema'

// import * as Mutations from './mutations'
// import * as Queries from './queries'
// import * as Types from './types'

// export const schema = makeSchema({
//   types: [Types, Mutations, Queries],
//   plugins: [nexusPrismaPlugin()],
//   outputs: {
//     schema: __dirname + '/generated/schema.graphql',
//     typegen: __dirname + '/generated/nexus.ts',
//   },
//   typegenAutoConfig: {
//     contextType: 'Context.Context',
//     sources: [
//       {
//         source: '@prisma/client',
//         alias: 'prisma',
//       },
//       {
//         source: require.resolve('./context'),
//         alias: 'Context',
//       },
//     ],
//   },
// })

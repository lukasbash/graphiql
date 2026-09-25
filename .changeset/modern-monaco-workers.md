---
'graphiql': major
'@graphiql/react': major
'monaco-graphql': major
---

Upgrade Monaco Editor to 0.56 and adopt its new worker and ESM entry points. `monaco-graphql` now requires `monaco-editor` 0.56 and a configured `MonacoEnvironment.getWorker`. Custom GraphQL workers must initialize immediately and provide non-cloneable configuration by overriding `GraphQLWorker.initialize`.

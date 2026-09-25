---
'graphiql': major
'@graphiql/react': major
'monaco-graphql': major
---

Upgrade Monaco Editor to 0.56 and adopt its new worker and ESM entry points. If you configure Monaco directly, upgrade `monaco-editor` to `0.56.x`, replace `monaco-editor/esm/vs/*` imports with exported entry points, and configure `MonacoEnvironment.getWorker` to return the GraphQL worker for the `graphql` label. Custom GraphQL workers must initialize immediately and provide non-cloneable configuration by overriding `GraphQLWorker.initialize`. GraphiQL's worker setup helpers handle these changes automatically. See the [GraphiQL 6 migration guide](../../docs/migration/graphiql-6.0.0.md#monaco-editor-056-and-worker-setup) for examples.

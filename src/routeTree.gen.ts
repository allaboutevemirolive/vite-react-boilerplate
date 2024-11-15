/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PostsImport } from './routes/posts'
import { Route as MusicImport } from './routes/music'
import { Route as DashboardImport } from './routes/dashboard'
import { Route as AboutImport } from './routes/about'

// Create/Update Routes

const PostsRoute = PostsImport.update({
  path: '/posts',
  getParentRoute: () => rootRoute,
} as any)

const MusicRoute = MusicImport.update({
  path: '/music',
  getParentRoute: () => rootRoute,
} as any)

const DashboardRoute = DashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/music': {
      id: '/music'
      path: '/music'
      fullPath: '/music'
      preLoaderRoute: typeof MusicImport
      parentRoute: typeof rootRoute
    }
    '/posts': {
      id: '/posts'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof PostsImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  AboutRoute,
  DashboardRoute,
  MusicRoute,
  PostsRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.ts",
      "children": [
        "/about",
        "/dashboard",
        "/music",
        "/posts"
      ]
    },
    "/about": {
      "filePath": "about.ts"
    },
    "/dashboard": {
      "filePath": "dashboard.ts"
    },
    "/music": {
      "filePath": "music.ts"
    },
    "/posts": {
      "filePath": "posts.ts"
    }
  }
}
ROUTE_MANIFEST_END */

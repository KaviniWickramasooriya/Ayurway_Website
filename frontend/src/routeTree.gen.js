import { Route as rootRoute } from './routes/__root.jsx'
import { Route as IndexRoute } from './routes/index.jsx'
import { Route as CheckoutRoute } from './routes/checkout.jsx'
import { Route as ProductsRoute } from './routes/products.jsx'
import { Route as StoryRoute } from './routes/story.jsx'
import { Route as ProductSlugRoute } from './routes/product.$slug.jsx'
import { Route as ContactRoute } from './routes/contact.jsx'

const IndexRouteConfig = IndexRoute.update({
  path: '/',
  getParentRoute: () => rootRoute,
})

const CheckoutRouteConfig = CheckoutRoute.update({
  path: '/checkout',
  getParentRoute: () => rootRoute,
})

const ProductsRouteConfig = ProductsRoute.update({
  path: '/products',
  getParentRoute: () => rootRoute,
})

const StoryRouteConfig = StoryRoute.update({
  path: '/story',
  getParentRoute: () => rootRoute,
})

const ProductSlugRouteConfig = ProductSlugRoute.update({
  path: '/product/$slug',
  getParentRoute: () => rootRoute,
})

// Adding Contact Page
const ContactRouteConfig = ContactRoute.update({
  path: '/contact',
  getParentRoute: () => rootRoute,
})

export const routeTree = rootRoute.addChildren([
  IndexRouteConfig,
  CheckoutRouteConfig,
  ProductsRouteConfig,
  StoryRouteConfig,
  ProductSlugRouteConfig,
  ContactRouteConfig,
])
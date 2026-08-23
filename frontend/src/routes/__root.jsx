import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { CartProvider } from "@/contexts/CartContext";
import { CartDrawer } from "@/components/CartDrawer";

export const Route = createRootRouteWithContext()({
  component: RootComponent,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-forest-deep">404</h1>
        <h2 className="mt-4 text-xl font-display text-foreground">Page not found</h2>
        <div className="mt-6">
          <a href="/" className="inline-flex items-center justify-center rounded-sm bg-forest px-6 py-2 text-sm uppercase tracking-widest text-ivory">Go home</a>
        </div>
      </div>
    </div>
  ),
});

function RootComponent() {
  return (
    <CartProvider>
      <Outlet />
      <CartDrawer />
    </CartProvider>
  );
}
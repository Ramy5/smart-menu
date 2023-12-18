// store/cartStore.js
import create from "zustand";

const useCartStore = create((set) => ({
  isOpen: false,
  openSidebar: false,
  cartItems: [],
  toggleSidebar: () => set((state) => ({ openSidebar: !state.openSidebar })),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  increaseQuantity: (itemId) =>
    set((state) => {
      const updatedCartItems = state.cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      );
      return { cartItems: updatedCartItems };
    }),

  decreaseQuantity: (itemId) =>
    set((state) => {
      const updatedCartItems = state.cartItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) } // Ensure quantity is at least 1
          : item
      );
      return { cartItems: updatedCartItems };
    }),
  addToCart: (product) => {
    set((state) => {
      // Check if the product is already in the cart
      const existingProduct = state.cartItems.find(
        (item) => item.id === product.id
      );

      // If the product is not in the cart, add it
      if (!existingProduct) {
        return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
      }

      // If the product is already in the cart, update its quantity
      const updatedCartItems = state.cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      return { cartItems: updatedCartItems };
    });
  },

  removeFromCart: (itemId) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== itemId),
    })),
  clearCart: () => set({ cartItems: [] }),

  wishlist: [],
  addToWishlist: (product) =>
    set((state) => {
      // Check if the product is already in the wishlist
      const isProductInWishlist = state.wishlist.some(
        (item) => item.id === product.id
      );

      // If the product is not in the wishlist, add it
      if (!isProductInWishlist) {
        return { wishlist: [...state.wishlist, product] };
      }

      // If the product is already in the wishlist, do nothing
      return null;
    }),
}));

export default useCartStore;

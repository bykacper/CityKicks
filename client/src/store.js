import create from 'zustand';

const useHeader = (set) => ({
    isMobileMenu: false,
    toogleMobileMenu: () => set((state) => ({
        isMobileMenu: !state.isMobileMenu
    })) 
}) 

const useShoppingCart = (set) => ({
    shoppingCart: [],  // Zmieniono na 'shoppingCart'
    addProduct: (newProduct) => set((state) => ({
        shoppingCart: [...state.shoppingCart, newProduct] // Zmieniono na 'shoppingCart'
    }))
})

const useStore = create((set) => ({
    ...useHeader(set),
    ...useShoppingCart(set)
}))


export default useStore;
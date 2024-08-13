import create from 'zustand';

const useHeader = (set) => ({
    isMobileMenu: false,
    toogleMobileMenu: () => set((state) => ({
        isMobileMenu: !state.isMobileMenu
    })) 
}) 

const useStore = create((set) => ({
    ...useHeader(set)
}))

export default useStore;
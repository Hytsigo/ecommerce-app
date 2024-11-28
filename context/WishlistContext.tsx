import { Welcome } from "@/interfaces/productInterfaces";
import { createContext, useContext, useState } from "react";

interface WishlistContextType {
    wishlist: Welcome[];
    addToWishlist: (item: Welcome) => void;
    removeFromWishlist: (id: number) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
    undefined
);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [wishlist, setWishlist] = useState<Welcome[]>([]);

    const addToWishlist = (item: Welcome) => {
        setWishlist((prev) => [...prev, item]);
    };

    const removeFromWishlist = (id: number) => {
        setWishlist((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <WishlistContext.Provider
            value={{ wishlist, addToWishlist, removeFromWishlist }}
        >
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (!context) {
        throw new Error("useWishlist must be used within a WishlistProvider");
    }
    return context;
};

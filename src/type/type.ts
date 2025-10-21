export type navType = {
    id: number;
    name: string;
    link: string;
}

export type headerType = {
    title: string;
    description: string;
}

export type sectionType = {
    id: number;
    sectionID?: string;
    title: string;
    description: string;
}

export type blogType = {
    id: number;
    title: string;
    description: string;
}

export type navLinkType = {
    id: number;
    name: string;
    link: string;
}

export type PostType = {
    id: number;
    userId: number;
    title: string;
    body: string;
}
export type ProductType = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    inStock?: number;
    size?: string[];
    images?: string[];

    colors?: {
        name: string;
        hex: string;
    }[];
    reviews?: {
        id: number;
        name: string;
        email: string;
        body: string;
    }[];
    rating?: {
        rate: number;
        count: number;
    }
}

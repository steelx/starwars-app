import React from "react";
import {DetailsItem} from "@pages/character/components/styles";


interface CharacterDetailsItemProps {
    children?: React.ReactNode;
}

const CharacterDetailsItem: React.FC<CharacterDetailsItemProps> = ({ children }) => (
    <DetailsItem>
        {children}
    </DetailsItem>
);

export default CharacterDetailsItem;

import React from 'react';
import {DialogOption} from "../types";

interface OptionsProps {
    options: DialogOption[];
    performAction: (action: DialogOption) => void;
}

export const Options = (props: OptionsProps) => {
    const classes = "OptionSelector";
    const options = props.options.map(option => <div className={classes} onClick={() => props.performAction(option)}>{option.text}</div>)
    return <div className="ConvoBottomHalf">
        {options}
    </div>
}

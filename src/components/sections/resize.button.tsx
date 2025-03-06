import { CSSProperties, ReactNode } from "react";

interface IProps {
    btnText?: string;
    btnIcons?: ReactNode;
    btnStyle?: CSSProperties
}

const ResizeButton = (props: IProps) => {
    const { btnText, btnIcons, btnStyle } = props;

    return (
        <button className="resize-button" style={btnStyle}>
            <span style={{ textTransform: "uppercase" }}>{btnText}</span>
            <>{btnIcons}</>
        </button>
    )
}

export default ResizeButton;
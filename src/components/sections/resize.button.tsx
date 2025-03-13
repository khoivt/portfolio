import { CSSProperties, ReactNode } from "react";

interface IProps {
    btnText?: string;
    btnIcons?: ReactNode;
    btnStyle?: CSSProperties;
    onClick?: () => void;
}

const ResizeButton = (props: IProps) => {
    const { btnText, btnIcons, btnStyle, onClick } = props;

    return (
        <button onClick={onClick} className="resize-button" style={btnStyle}>
            <span style={{ textTransform: "uppercase" }}>{btnText}</span>
            <>{btnIcons}</>
        </button>
    )
}

export default ResizeButton;
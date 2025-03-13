import { FaFacebook } from "react-icons/fa6";
import { SiGmail, SiLinkedin } from "react-icons/si";

interface IProps {
    linkedin?: string;
    facebook?: string;
    email?: string;
}
const SocialMedia = (props: IProps) => {
    const { linkedin, facebook, email } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={linkedin} target='_blank' className="highlight" title="Linkedin Vu Tien Khoi">
                <SiLinkedin size={30} />
            </a>
            <a href={facebook} target='_blank' className="highlight" title="Facebook Vũ Khôi">
                <FaFacebook size={30} />
            </a>
            <a href={email} target='_blank' className="highlight" title="Email Vũ Khôi">
                <SiGmail size={30} />
            </a>
        </div>
    )
}

export default SocialMedia;
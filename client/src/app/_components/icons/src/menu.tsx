import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIcon as SvgIconType } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props: SvgIconType) {
    return (
        <BaseIcon {...props}>
            <path d="M21 7.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Zm0 5H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Zm0 5H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Z"/>
        </BaseIcon>
    )
}
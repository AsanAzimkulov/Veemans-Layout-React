import Image from "next/image";
import { FunctionComponent } from "react";
import Button1 from "../../ui/button1/button1";
import Title1 from "../../ui/title1/title1";
import styles from "./blockTeam.module.css";

interface MemberType {
	title: string,
	email: string
}

interface ItemProps {
	member: MemberType
}

interface Props {
	title: string,
	members: Array<MemberType>
}

const BlockTeamItem: FunctionComponent<ItemProps> = (props) => {
	return (
		<div className={styles["teamItem"]}>
			<div className={styles["title"]}>{ props.member.title }</div>
			<div className={styles["email"]}>{ props.member.email }</div>
		</div>
	);
}

const BlockTeam: FunctionComponent<Props> = (props) => {
	return (
		<div className={styles["container"]}>
			<Title1>{ props.title }</Title1>
			<div className={styles["teamLine"]}>{
				props.members.map((member, index) => <BlockTeamItem key={ 'faq_' + index } member={ member } />)
			}</div>
		</div>
	);
};

export default BlockTeam;
